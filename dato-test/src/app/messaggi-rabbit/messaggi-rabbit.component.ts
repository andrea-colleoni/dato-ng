import { Component, OnInit } from '@angular/core';
import { Messaggio } from '../messaggio';
import { MessagingService } from '../messaging.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messaggi-rabbit',
  templateUrl: './messaggi-rabbit.component.html',
  styleUrls: ['./messaggi-rabbit.component.css']
})
export class MessaggiRabbitComponent implements OnInit {
  public receivedMessages: string[] = [];
  private topicSubscription: Subscription;

  listaMessaggi: Messaggio[] = [];

  constructor(
    private rxStompService: RxStompService,
  ) {
    // this.topicSubscription = this.rxStompService.watch('queue_01').subscribe((message: Message) => {
    //   console.log(message);
    //   this.receivedMessages.push(message.body);
    // });
    this.topicSubscription = this.rxStompService.watch('/exchange/exch_01').subscribe((message: Message) => {
      console.log(message);
      this.receivedMessages.push(message);
    });
   }

  ngOnInit(): void {

  }

}
