import { CreateUserComponent } from "./create-user/create-user.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: UserCardComponent
  },
  {
    path: "add",
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
