import { Component } from '@angular/core';
import { faSearch, faUser, faGear, faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  faUser = faUser;
  faGear = faGear;
  faBell = faBell;
}
