import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../services/dataJson.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styles: [
  ]
})
export class ResumenComponent implements OnInit {

  constructor(public cv: DataJsonService) { }

  ngOnInit(): void {
  }

}
