import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {


  @ViewChild('searchTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private _gifsService:GifsService){}

  public searchTag():void{
    const tag = this.tagInput.nativeElement.value;
    this._gifsService.SearchTag(tag);
    this.tagInput.nativeElement.value='';
  }

}
