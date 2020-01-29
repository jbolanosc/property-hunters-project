import { UserModule } from "./modules/user/user.module";
import { LoginModule } from "./modules/login/login.module";
import { LandingModule } from "./modules/landing/landing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgentModule } from "./modules/agent/agent.module";
import { PropertyModule } from "./modules/property/property.module";

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgentModule,
    LandingModule,
    PropertyModule,
    LoginModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
