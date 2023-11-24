import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nz-pagination
      style="text-align:center"
      [(nzPageIndex)]="currentPage"
      [nzTotal]="total"
      [nzSize]="'default'"
      [(nzPageSize)]="currentSize"
      nzShowSizeChanger
      [nzResponsive]="true"
      (nzPageIndexChange)="emitPage.emit(currentPage)"
      (nzPageSizeChange)="emitPage.emit({ size: currentSize })"
      [nzShowTotal]="rangeTemplate"
    ></nz-pagination>

    <ng-template #rangeTemplate let-range="range" let-total>
      Hiển thị {{ range[0] }}-{{ range[1] }} trong {{ total }} bản ghi
    </ng-template>
  `,
})
export class PaginationComponent {
  @Input() total: number = 0;
  @Output() emitPage: EventEmitter<any> = new EventEmitter();
  @Input() currentPage = 1;

  @Input() currentSize = 10;

  pageSize: any;
  getPage(page: number) {
    this.currentPage = page;
  }
  getSize(size: number) {
    this.currentSize = size;
  }
  ngOnInit(): void {
    this.emitPage.emit(this.currentPage);
  }
}
//  [nzPageSizeOptions]="[10, 20, 30, 40]"
