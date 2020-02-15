import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(name: string, description: string, photo: File) {
    alert("User created succesfully");
  }

  getUser() {
    return this.http.get<User>(environment.jsonApi);
  }

  updateUser() {
    alert("User created succesfully");
  }
}
