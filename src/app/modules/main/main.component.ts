import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { AppData } from 'src/app/shared';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  repositoryList = [];
  totalCount;
  pageCount = 0;
  spinnerShow = false;
  constructor(private mainService: MainService, ) {
  }

  ngOnInit() {
    this.getData(this.pageCount);
  }
  getData(count) {
    this.spinnerShow = true;
    this.mainService.gitRepositoryList(count).then(res => {
      console.log(res['body'], '--------->res');
      this.repositoryList = res['body']['items'];
      AppData.repositorySub$.next(this.repositoryList);
      this.totalCount = res['body']['total_count'];
      this.spinnerShow = false;
    })
  }

  getPageCount(count) {
    console.log(count);
    this.getData(count);
  }
}
