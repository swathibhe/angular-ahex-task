import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  paginationValue = 0;
  count;
  @Output() countValue: EventEmitter<any> = new EventEmitter();
  @Input() totalCount: any;
  constructor() { }

  ngOnInit() {
    
  }

  previousClick() {
    if (this.paginationValue > 0) {
      this.paginationValue--;
      this.countValue.emit(this.paginationValue);
    }
    console.log('----------->previous', this.paginationValue);
  }

  nextClick() {
    if ((this.totalCount / 30) >= this.paginationValue) {
      this.paginationValue++;
      this.countValue.emit(this.paginationValue);
    }
  }

  firstClick() {
    this.paginationValue = 0;
    this.countValue.emit(this.paginationValue);
  }

  lastClick() {
    this.paginationValue = this.count;
    this.countValue.emit(this.paginationValue);
  }

}
