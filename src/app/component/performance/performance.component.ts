import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
})
export class PerformanceComponent {
  constructor(private dataService: DataService) {}

  tab: string = 'instagram';

  changeTab(input: string) {
    this.tab = input;
  }

  postType: string = 'Post';
  drop: boolean = false;

  setDrop() {
    this.drop = !this.drop;
  }

  changeType(input: string) {
    this.postType = input;
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.pagination = res;
      this.post = res.individualList.filter((item: any) => {
        return item.postType == 'post';
      });
      this.reels = res.individualList.filter((item: any) => {
        return item.postType == 'reels';
      });
    });
  }

  post: any;
  reels: any;
  pagination: any;

  get data() {
    if (this.postType == 'Post') {
      return this.post;
    } else {
      return this.reels;
    }
  }
}
