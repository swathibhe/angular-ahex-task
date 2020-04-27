import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GridComponent } from './components/grid/grid.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderByPipe } from './components/grid/order-by.pipe';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }
]


@NgModule({
  declarations: [MainComponent, GridComponent, PaginationComponent, OrderByPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
