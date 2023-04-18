import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Insurance System';

  items: NbMenuItem[] = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Contact Us', link: '/contact' },
  ];
}
