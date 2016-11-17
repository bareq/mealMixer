import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import {MealsCountComponent} from "../pages/main/meals-count.component";

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    MealsCountComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    MealsCountComponent
  ],
  providers: []
})
export class AppModule {}
