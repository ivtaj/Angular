import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { LocalStorageDataComponent } from './local-storage-data/local-storage-data.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
  {
    path: '',
    component: AddTaskComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-tasks',
    component: LocalStorageDataComponent
  },
  {
    path: '**',
    component: DeleteItemComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
