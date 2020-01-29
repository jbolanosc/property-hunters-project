import { AgentService } from './../../services/agent-service/agent.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../../services/user-service/user.service';
import { UserRoutingModule } from './user-routing.module';
import { ValidateSubmitDirective } from 'src/app/directives/validate-submit.directive';





@NgModule({
  declarations: [EditUserComponent, CreateUserComponent, UserCardComponent, ValidateSubmitDirective],
  imports: [
    CommonModule, FormsModule,UserRoutingModule, ReactiveFormsModule
  ],
  exports: [
    EditUserComponent,
    CreateUserComponent,
    UserCardComponent
  ],
  providers: [UserService, AgentService]
})
export class UserModule { }
