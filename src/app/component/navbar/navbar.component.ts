import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  language: string = 'eng';

  lang: any[] = [
    {
      id: 'eng',
      title: 'English (us)',
      img: '',
    },
    {
      id: 'ina',
      title: 'Bahasa Indonesia',
      img: '',
    },
  ];

  dropLang: boolean = false;
  setDrop() {
    this.dropLang = !this.dropLang;
  }

  setLang(input: string) {
    this.language = input;
    this.setDrop();
  }
}
