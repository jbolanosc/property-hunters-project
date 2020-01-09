import { ListPropertiesComponent } from './property/list-properties/list-properties.component';
import { CreatePropertyComponent } from './property/create-property/create-property.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CreateAgentComponent } from './agent/create-agent/create-agent.component';
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { LandingPageComponent } from "./landing/landing-page/landing-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: "landing",
    component: LandingPageComponent
  },
  {
    path: "newUser",
    component: CreateUserComponent
  },
  {
    path: "agents",
    component: CreateAgentComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "newProperty",
    component: CreatePropertyComponent
  },
  {
    path: "properties",
    component: ListPropertiesComponent
  },
  {
    path: "",
    redirectTo: "/landing",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
