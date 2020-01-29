import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user-service/user.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  constructor(private userData: UserService) {}

  ngOnInit() {
    this.getUser();
  }
  user:object = {};

  getUser() {
    this.userData.getUser().subscribe(user => {
      this.user = user, (err) => console.error(err);
    });
  }
}
