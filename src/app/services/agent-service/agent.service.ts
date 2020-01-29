import { Agent } from "./../../models/Agent";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AgentService {
  constructor(private http: HttpClient) {}

  createAgent(agent: Agent) {
    const fd = new FormData();
    fd.append("name", agent.name);
    fd.append("lastname", agent.lastname);
    fd.append("password", agent.password);
    fd.append("email", agent.email);
    fd.append("company", agent.company);
    fd.append("phone", agent.phone);
    fd.append("image", agent.image);
    return this.http.post<Agent>(environment.agentService + "/agents", fd);
  }

  getAgents() {
    return this.http.get<Agent[]>(environment.agentService + "/agents");
  }

  getAgent(id: string) {
    return this.http.get(environment.agentService + "/agent/" + id);
  }

  updateAgent() {}
}
