import {Component, OnInit} from '@angular/core';
/**
 * type of javascript variable
 * 1.number
 * 2.string
 * 3.boolean
 * 4.object(array, function)
 */




@Component({
  selector: 'my-app',
  //''아니고 ``(back tip?)
  templateUrl: './app.component.html'
  ,
  styleUrls:['./app.component.css']
  })
export class AppComponent{
  title = 'Tour of Heroes';
}



