import { Component, OnInit } from '@angular/core';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {

  valore: string;

  constructor(
    private serv: ServizioService,
  ) { }

  ngOnInit(): void {
    this.serv.osservabile.subscribe(s => {
      this.valore = s;
    });
  }

  cambiato(input: string) {
    this.serv.cambiaSoggetto(input);
  }
}
