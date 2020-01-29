import { Component, OnInit, Input } from '@angular/core';
import { Agent } from 'src/app/models/Agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.css']
})
export class AgentCardComponent implements OnInit {

  @Input() agent: Agent;

  constructor() { }

  ngOnInit() {
  }

}
