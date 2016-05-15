import {Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'world-data-bank',
  templateUrl: 'app/main/main.component.html',
  directives: [MaterializeDirective],
  styleUrls: ['app/main/main.component.css']
})


export class MainComponent {
  title = 'Main Page';
  waterfallimgurl = 'static/img/waterfall.jpg';
  riverimgurl = 'static/img/river.jpg';
  caravanimgurl = 'static/img/caravan.jpg';
  winterimgurl = 'static/img/winter.jpg';
  spaceimgurl = 'static/img/space.jpeg';
}
