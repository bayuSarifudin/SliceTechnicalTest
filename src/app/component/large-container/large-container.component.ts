import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-container',
  templateUrl: './large-container.component.html',
  styleUrls: ['./large-container.component.css'],
})
export class LargeContainerComponent {
  @Input() title = 'Title';
  @Input() number = 0;
}
