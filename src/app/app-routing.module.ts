import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/forms/table/table.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  {path : '' , component : TableComponent},
  {path : 'persona/:id' , component : ModalComponent},
  {path : '**' , pathMatch : 'full', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
