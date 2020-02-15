import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user-service/user.service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  user: User;
  constructor(private userData: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userData.getUser().subscribe(gotUser => {
      (this.user = gotUser), err => console.error(err);
    });
  }
}
