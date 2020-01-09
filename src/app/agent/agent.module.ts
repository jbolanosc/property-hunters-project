import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { AgentCardComponent } from './agent-card/agent-card.component';
import { AgentsListComponent } from './agents-list/agents-list.component';



@NgModule({
  declarations: [CreateAgentComponent, EditAgentComponent, AgentCardComponent, AgentsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreateAgentComponent,
    EditAgentComponent
  ]
})
export class AgentModule { }
