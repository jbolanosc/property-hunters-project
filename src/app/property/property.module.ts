import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';



@NgModule({
  declarations: [CreatePropertyComponent, ListPropertiesComponent, EditPropertyComponent, PropertyCardComponent, PropertyListComponent],
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
