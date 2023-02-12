import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  compareActive = false;
  items = ['item 1', 'item 2', 'item 3'];
  itemsCount = 3;

  onClick(){
    this.itemsCount++;
    this.items.push('items'+this.itemsCount)
  }
}
