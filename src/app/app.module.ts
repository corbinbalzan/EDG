import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NavComponent } from './nav/nav.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TableComponent } from '../table/table.component';
import { DataEntryComponent } from './auth/data-entry/data-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    NavComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    TableComponent,
    //TableRowComponent
    DataEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginator,
    MatTableDataSource
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
