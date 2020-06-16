import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTableModule } from 'ornamentum';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/forms/table/table.component';
import { ContentComponent } from './components/forms/content/content.component';
import { AppServiceService } from './servicios/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    TableComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTableModule.forRoot()
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
