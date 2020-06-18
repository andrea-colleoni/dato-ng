import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../../services/servizio.service';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {

  // titolo: string;

  constructor(
    public serv: ServizioService,  // dependency injection by constructor
  ) { }

  ngOnInit(): void {
  }

}
