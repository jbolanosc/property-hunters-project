import { Injectable } from '@angular/core';
import {HttpClient}  from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URI = "http://localhost:4000/api/photos";

  constructor(private http: HttpClient) { }

  createPhoto(name: string, description: string, photo: File){
/*     const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('photo', photo); */

    alert("User created succesfully");

    //return this.http.post(this.URI, fd);
  }
}
