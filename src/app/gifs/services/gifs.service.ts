import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphyResponse } from '../interfaces/giphy-response.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

  // api.giphy.com/v1/gifs/search?api_key=5b3KzvGhQ5Fm9TNoQlO2ARRgNaQZRkEN&q={TERMIN_DE_BUSQUEDA}&limit=5
  private GIPHY_API_KEY: string = 'HwhLIiPkeGRyRxpOTdegnGv1Q9sULYAb'
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'



  private _tagHistory: string[] = []
  private _gifsList: Gif[] = [];

  constructor(private _http: HttpClient) {
     this.loadLocalStorage()
      this.searchFirstTerm()
    }

  get tagHistory(): string[] { return [... this._tagHistory]; }
  get gifsList(): Gif[] { return [... this._gifsList]; }

  SearchTag(tag: string, limitNumber: number = 20): void {

    let newTag = tag.trim();
    if (newTag.length === 0) return;

    this.organizeHistory(newTag.toUpperCase())

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', limitNumber)
      .set('q', tag);


    this._http.get<GiphyResponse>(`${this.serviceURL}/search`, { params })
      .subscribe(
        ({ data }) => { this._gifsList = data; }
      )

  }

  private organizeHistory(newTag: string) {

    this._tagHistory = this.tagHistory.filter(e => e !== newTag)
    this._tagHistory.unshift(newTag);
    this._tagHistory = this.tagHistory.slice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this.tagHistory))
  }

  private loadLocalStorage():void{
    if (!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!)
  }

  private searchFirstTerm():void{
    if(this._tagHistory.length===0) return;
    this.SearchTag(this.tagHistory[0])
  }

}
