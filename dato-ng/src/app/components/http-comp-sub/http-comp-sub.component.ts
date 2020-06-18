import { Component, OnInit, Input, Host } from '@angular/core';
import { HttpCompComponent } from '../http-comp/http-comp.component';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-http-comp-sub',
  templateUrl: './http-comp-sub.component.html',
  styleUrls: ['./http-comp-sub.component.css']
})
export class HttpCompSubComponent implements OnInit {

  @Input() propDiversa: string; // apertura a iniezione di un valore da parte di un contenitore ( con le [] )
  @Host() superComp: HttpCompComponent; // puntatore al componente contenitore

  constructor(
    private serv: ServizioService,
  ) { }

  ngOnInit(): void {
    // this.propDiversa = 'modificata';
    if (this.superComp) {
      // console.log(this.superComp.)
    }
    this.serv.osservabile.subscribe(s => {
      this.propDiversa = s;
    });
  }

  compFunz() {
    this.serv.funzione();
    this.serv.cambiaSoggetto('pippo');
  }

}
