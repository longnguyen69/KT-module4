import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './books/list/list.component';
import { CreateComponent } from './books/create/create.component';
import { EditComponent } from './books/edit/edit.component';
import { DetailComponent } from './books/detail/detail.component';


const routes: Routes = [
  {
    path: 'book', component: ListComponent
  },
  {
    path: 'book/create-new', component: CreateComponent
  },
  {
    path: 'book/:id/edit', component: EditComponent
  },
  {
    path: 'book/:id/detail', component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
