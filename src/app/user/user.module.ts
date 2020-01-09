import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';




@NgModule({
  declarations: [EditUserComponent, CreateUserComponent, UserCardComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    EditUserComponent,
    CreateUserComponent
  ]
})
export class UserModule { }
