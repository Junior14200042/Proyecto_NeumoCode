import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaCurso: string[]=['typeScript','JavaScript','JAVA','CSS'];
  habilitar:boolean=true;
  constructor() { }


}
