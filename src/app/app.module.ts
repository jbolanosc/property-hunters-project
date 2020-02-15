import { UserModule } from "./modules/user/user.module";
import { LoginModule } from "./modules/login/login.module";
import { LandingModule } from "./modules/landing/landing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgentModule } from "./modules/agent/agent.module";
import { PropertyModule } from "./modules/property/property.module";
import { ReusableComponentComponent } from "./reusable-component/reusable-component.component";

@NgModule({
  declarations: [AppComponent, ReusableComponentComponent],
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
  bootstrap: [AppComponent],
  entryComponents: [ReusableComponentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(ReusableComponentComponent, {
      injector
    });
    customElements.define("componentes-elemento", element);
  }

  ngDoBootstrap() {}
}
