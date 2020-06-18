import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { MessaggiRabbitComponent } from './messaggi-rabbit/messaggi-rabbit.component';
import {
  RxStompService,
  InjectableRxStompConfig,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';
import { MesRxStompConfig } from './mes-rx-stomp.config';

@NgModule({
  declarations: [AppComponent, ListaComponent, MessaggiRabbitComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: MesRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
