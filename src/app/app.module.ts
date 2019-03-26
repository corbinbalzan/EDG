import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTableModule,
  MatIconModule
} from "@angular/material";
import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { NavComponent } from "./nav/nav.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { CluckComponent } from "./cluck/cluck.component";
import { DataEntryComponent } from "./auth/data-entry/data-entry.component";
import { TableComponent } from "./people/table/table.component";
import { PersonCreateComponent } from "./people/person-create/person-create.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { ResultsDisplayComponent } from "./results-display/results-display.component";

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    NavComponent,
    PersonCreateComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    CluckComponent,
    PersonCreateComponent,
    TableComponent,
    DataEntryComponent,
    SearchBarComponent,
    SearchPageComponent,
    ResultsDisplayComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
