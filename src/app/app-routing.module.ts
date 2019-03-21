import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PersonCreateComponent } from "./people/person-create/person-create.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { CluckComponent } from "./cluck/cluck.component";
import { DataEntryComponent } from "./auth/data-entry/data-entry.component";
import { TableComponent } from "./people/table/table.component";

const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "create", component: PostCreateComponent },
  { path: "edit/:postId", component: PostCreateComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "cluck", component: CluckComponent },
  { path: "createPerson", component: PersonCreateComponent },
  { path: "data-entry", component: DataEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
