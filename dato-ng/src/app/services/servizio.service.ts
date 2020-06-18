import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  pubblica: string;
  soggetto: Subject<string> = new Subject<string>();

  constructor() {
    console.log('servizio');
  }

  get osservabile(): Observable<string> {
    return this.soggetto.asObservable();
  }

  funzione() {
    console.log(`chiamata funzione: ${this.pubblica}`);
  }

  cambiaSoggetto(testo: string) {
    this.soggetto.next(testo);
  }

}
