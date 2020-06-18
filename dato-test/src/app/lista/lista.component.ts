import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  titolo = 'App con messaggistica rabbit';

  constructor() { }

  ngOnInit(): void {
  }

  funzione() {
    console.log('test');
  }

}
