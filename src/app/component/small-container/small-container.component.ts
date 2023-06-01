import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-container',
  templateUrl: './small-container.component.html',
  styleUrls: ['./small-container.component.css'],
})
export class SmallContainerComponent {
  @Input() title = 'Title';
  @Input() number = 0;
}
