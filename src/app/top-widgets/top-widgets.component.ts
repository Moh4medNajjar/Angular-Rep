import { Component } from '@angular/core';
import {faArrowRight, faCalendarDay, } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faArrowRight = faArrowRight;
  faCalendarDay = faCalendarDay;
}
