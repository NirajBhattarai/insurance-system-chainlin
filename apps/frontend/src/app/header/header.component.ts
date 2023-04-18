import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items: NbMenuItem[] = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Contact Us', link: '/contact' },
  ];
}
