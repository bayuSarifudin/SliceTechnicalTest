import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalItems: number = 1;
  @Input() number: number = 1;
  @Input() numberElements: number = 1;
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() onPageChanged: any = null;
  @Input() size: number = 10;
  page: number = 1;

  constructor() {}

  ngOnInit(): void {}

  get first() {
    if (this.currentPage > 1 && this.totalPages > 1) {
      return false;
    }
    return true;
  }
  get last() {
    if (this.currentPage === this.totalPages) {
      return true;
    }
    return false;
  }
  get hasPrevPage() {
    if (this.currentPage > 1) {
      return true;
    }
    return false;
  }

  get hasNextPage() {
    if (this.currentPage < this.totalPages) {
      return true;
    }
    return false;
  }
}
