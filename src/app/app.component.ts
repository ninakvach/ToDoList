import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Nina';
  items = [
    {description:"breakfast",action:"No"},
    {description:"cinema",action:"No"},
    {description:"football",action:"No"},
    {description:"coding",action:"No"},
    {description:"painting",action:"No"},
  ];
}
