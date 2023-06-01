import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.data = res.summary;
    });
  }

  data: any;

  tab: string = 'instagram';

  changeTab(input: string) {
    this.tab = input;
  }
}
