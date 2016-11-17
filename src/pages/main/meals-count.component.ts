import {Component, OnInit, Input} from '@angular/core';
import {MainPage} from "./main";

@Component({
  template: `
    <ion-list no-lines radio-group [(ngModel)]="mealsCount" (ionChange)="changeFontFamily()" class="popover-page">
      <ion-item>
        <ion-label>1 meal</ion-label>
        <ion-radio value="1"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>2 meals</ion-label>
        <ion-radio value="2"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class MealsCountComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }


  changeFontFamily() {
    console.log("elo");


  }


}
