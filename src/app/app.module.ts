import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './main/main.component';
import { TabillentryComponent } from './tabillentry/tabillentry.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { BilllistComponent } from './billlist/billlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TabillentryComponent,
    BilllistComponent
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatGridListModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width'
    }),
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
