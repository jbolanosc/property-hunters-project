import { Agent } from 'src/app/models/Agent';
import { AgentService } from "./../../../services/agent-service/agent.service";
import { User } from "../../../models/User";
import { Component, OnInit } from "@angular/core";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"]
})
export class CreateUserComponent implements OnInit {
  constructor(private agentService: AgentService) {}

  ngOnInit() {}

  file: File;
  photoSelected: string | ArrayBuffer;
  phonePattern = "[0-9]{3,10}"; 
  isAgent: boolean = false;
  user = {
    name: "",
    lastname: "",
    email: "",
    company: "",
    phone: "",
    password: ""
  };

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //ImagePreview
      const reader = new FileReader();
      reader.onload = e => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  saveUser(
  ): void {
    if (this.isAgent) {
      const agent: Agent = {
        name: this.user.name,
        lastname: this.user.lastname,
        password: this.user.password,
        email: this.user.email,
        company: this.user.company,
        phone: this.user.phone,
        image: this.file,
        imagePath: ""
      };
      console.log(agent);
      this.agentService.createAgent(agent).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    } else {
      alert("User created");
    }
  }

  onChangeAgent() {
    if (this.isAgent === true) {
      this.isAgent = false;
    } else {
      this.isAgent = true;
    }
  }
}
