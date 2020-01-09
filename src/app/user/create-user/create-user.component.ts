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
  constructor() {}

  ngOnInit() {}

  file: File;
  photoSelected: string | ArrayBuffer;
  name = "";
  message = "Welcome ";
  isAgent:boolean = false;

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
    firstname: HTMLInputElement,
    lastname: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    phone: HTMLInputElement
  ): boolean {
    alert("User created");
    return false;
  }

  onChangeAgent(){
    if(this.isAgent === true){
      this.isAgent = false;
    }
    else{
      this.isAgent = true;
    }
  }
}
