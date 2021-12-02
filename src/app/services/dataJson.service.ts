import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {
  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];

  constructor() {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
  }

  private CargarProfesional() {
    fetch('https://jchafloquemcv-default-rtdb.firebaseio.com/profesional.json').then(resp => {
      resp.json().then(data => this.profesional = data)
    })
  }
  private CargarEducacion() {
    fetch('https://jchafloquemcv-default-rtdb.firebaseio.com/educacion.json').then(resp => {
      resp.json().then(data => this.educacion = data)
    })
  }
  private CargarTestimonio() {
    fetch('https://jchafloquemcv-default-rtdb.firebaseio.com/testimonios.json').then(resp => {
      resp.json().then(data => this.testimonio = data)
    })
  }
  private CargarExperiencia() {
    fetch('https://jchafloquemcv-default-rtdb.firebaseio.com/experiencia.json').then(resp => {
      resp.json().then(data => this.experiencia = data)
    })
  }
}
