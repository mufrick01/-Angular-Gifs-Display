import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/giphy-response.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() public gif:Gif = {} as Gif;


public hasloaded:boolean=false;

loadIMG(){
  // this.hasloaded=true;
  console.log('is load');
}


}
