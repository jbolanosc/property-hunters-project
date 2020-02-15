import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-reusable-component",
  templateUrl: "./reusable-component.component.html",
  styleUrls: ["./reusable-component.component.css"]
})
export class ReusableComponentComponent implements OnInit {
  title = "componentes";

  @Input() public nombre: string;
  @Input() public mensaje: string;

  ngOnInit() {
    if (!this.nombre || this.nombre.length != 0) {
      console.log("El nombre es: " + this.nombre);
    }
  }
}
