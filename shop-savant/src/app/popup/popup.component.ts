import { Component, OnInit } from '@angular/core';

export class itemInfo {
  title!: string;
  thumbnail!: string;
  price!: number;
  preferred!: boolean;
  hovered!: boolean;

}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  itemCompareList: itemInfo[] = [
    {
      title: 'lenovoThinkpad1',
      thumbnail: "assets/error.png",
      price: 499,
      preferred: false,
      hovered: false
    },
    {
      title: 'lenovoThinkpad2',
      thumbnail: "assets/error.png",
      price: 600,
      preferred: true,
      hovered: false
    }
  ]
  compareActive = false;
  items = ['item 1', 'item 2', 'item 3'];
  itemsCount = 3;
  showX = false;
  onClick(){
    this.itemsCount++;
    this.items.push('items'+this.itemsCount)
    console.log(this.itemCompareList[0])
  }
  ngOnInit(): void {
      // this.itemCompareList[0].preferred = true;
  }
}
