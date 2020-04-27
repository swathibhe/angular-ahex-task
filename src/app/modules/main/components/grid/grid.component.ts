import { Component, OnInit, Input } from '@angular/core';
import { AppData } from 'src/app/shared';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() repository = [];
  constructor() {
  }

  ngOnInit() {
    AppData.repositorySub$.subscribe((res) => {
      this.repository = res;
      console.log(this.repository);
    });

  }

}
