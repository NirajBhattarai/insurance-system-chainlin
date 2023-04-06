import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  items: NbMenuItem[] = [
    {
      title: '',
      link: '/',
    },
    {
      title: '',
      link: 'dashboard',
    },
  ];
}
