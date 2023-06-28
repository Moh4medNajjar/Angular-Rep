import { Component } from '@angular/core';
import { faDashboard, faUserGroup, faDiagramProject, faWrench,faPersonChalkboard, faDatabase, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faUserGroup = faUserGroup;
  faDiagramProject = faDiagramProject;
  faWrench = faWrench;
  faPersonChalkboard = faPersonChalkboard;
  faUserFriends = faUserFriends;
  faDatabase = faDatabase;
}
