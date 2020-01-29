import { AgentService } from "./../../../services/agent-service/agent.service";
import { Component, OnInit } from "@angular/core";
import { Agent } from "src/app/models/Agent";

@Component({
  selector: "app-agents-list",
  templateUrl: "./agents-list.component.html",
  styleUrls: ["./agents-list.component.css"]
})
export class AgentsListComponent implements OnInit {
  agents: Agent[] = [];

  constructor(private agentService: AgentService) {}

  ngOnInit() {
    this.agentService.getAgents().subscribe(
      res => (this.agents = res),
      err => console.log(err)
    );
  }
}
