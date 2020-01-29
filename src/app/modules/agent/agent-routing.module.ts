import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgentsListComponent } from "./agents-list/agents-list.component";
import { EditAgentComponent } from "./edit-agent/edit-agent.component";

const routes: Routes = [
  {
    path: "",
    component: AgentsListComponent
  },
  {
    path: "edit",
    component: EditAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}