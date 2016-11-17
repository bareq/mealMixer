import {Component} from '@angular/core';
import {PopoverController, Popover} from "ionic-angular";
import {MealsCountComponent} from "./meals-count.component";

@Component({
  templateUrl: 'main.html',
  styleUrls: ['/pages/main/main.scss']
})
export class MainPage {

  popover: Popover;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(ev) {

    this.popover = this.popoverCtrl.create(MealsCountComponent);

    this.popover.present({
      ev: ev
    });
  }

  hidePopover(){

  }

}
