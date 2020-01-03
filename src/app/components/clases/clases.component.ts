import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";

  propiedades:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

}
