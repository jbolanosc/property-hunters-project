import { LandingPageComponent } from "./modules/landing/landing-page/landing-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: LandingPageComponent
      },
      {
        path: "user",
        loadChildren: "./modules/user/user.module#UserModule"
      },
      {
        path: "agent",
        loadChildren: "./modules/agent/agent.module#AgentModule"
      }
    ]
  },
  { path: "**", redirectTo: "landing" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
