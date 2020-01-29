import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { AgentCardComponent } from './agent-card/agent-card.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentService } from '../../services/agent-service/agent.service';
import { FormsModule } from '@angular/forms';
import { AgentRoutingModule } from "./agent-routing.module";



@NgModule({
  declarations: [CreateAgentComponent, EditAgentComponent, AgentCardComponent, AgentsListComponent],
  imports: [
    CommonModule, FormsModule, AgentRoutingModule
  ],
  exports: [
    CreateAgentComponent,
    EditAgentComponent,
    AgentCardComponent
  ], 
  providers: [AgentService]
})
export class AgentModule { }
