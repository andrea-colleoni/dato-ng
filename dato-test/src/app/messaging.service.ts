import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RxStompState } from '@stomp/rx-stomp';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private subscriptions = {};

  constructor(
    private rxStompService: RxStompService,
  ) {
    rxStompService.connectionState$.subscribe((state) => {
      // state is an Enum (Integer), RxStompState[state] is the corresponding string
      console.log(RxStompState[state]);
    });
    rxStompService.stompErrors$.subscribe(e => {
      console.warn(e);
    });
    rxStompService.webSocketErrors$.subscribe(e => {
      console.warn(e);
    });
    rxStompService.connected$.subscribe(e => {
      console.warn(e);
    });
  }

  SendMessage(queue: string, messageBody: any) {
    this.rxStompService.publish({ destination: queue, body: messageBody });
  }

  ObserveMessages(queue: string): Observable<IMessage> {
    if (!this.subscriptions[queue]) {
      console.warn(`missing subscription to ${queue}`);
    } else {
      return this.subscriptions[queue] as Observable<IMessage>;
    }
  }

  Subscribe(queue: string) {
    if (!this.subscriptions[queue]) {
      this.subscriptions[queue] = this.rxStompService.watch(`/exchange/mes.fanout.ui`).pipe(
        tap(m => console.log(`message received on ${queue} from broker`, m.headers))
      );
    } else {
      console.warn(`queue ${queue} already subscribed`);
    }
  }

  Unsubscribe(queue: string) {
    if (!this.subscriptions[queue]) {
      console.warn(`missing subscription to ${queue}`);
    } else {
      this.subscriptions[queue].unsubscribe();
      this.subscriptions[queue] = undefined;
    }
  }

  UnsubscribeAll() {
    for (const prop in this.subscriptions) {
      if (Object.prototype.hasOwnProperty.call(this.subscriptions, prop)) {
        this.subscriptions[prop].unsubscribe();
      }
    }
  }
}
