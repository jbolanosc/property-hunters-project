import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';



@NgModule({
  declarations: [CreateAgentComponent, EditAgentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreateAgentComponent,
    EditAgentComponent
  ]
})
export class AgentModule { }
