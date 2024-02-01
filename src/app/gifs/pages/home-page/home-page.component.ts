import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/giphy-response.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private _gifsService:GifsService) { }

  get gifList(){return [... this._gifsService.gifsList]}
}
