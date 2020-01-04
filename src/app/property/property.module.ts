import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';



@NgModule({
  declarations: [CreatePropertyComponent, ListPropertiesComponent, EditPropertyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreatePropertyComponent,
    ListPropertiesComponent,
    EditPropertyComponent
  ]
})
export class PropertyModule { }
