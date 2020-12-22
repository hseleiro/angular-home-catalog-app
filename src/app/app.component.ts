import {Component, OnInit, SimpleChanges} from '@angular/core';
import {State, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MessageService} from 'primeng/api';
import {NotificationModule} from "./core/models/notification-model/notification.model";
import {selectNotification} from "./shared/state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  public message$: Observable<NotificationModule>

  // @ts-ignore
  constructor(private store: Store<State>, private messageService: MessageService) {
    this.message$ = store.select(selectNotification);
  }

  ngOnInit(): void {
    this.message$.subscribe((message) => {
      const userMessage = `${message.detail} (${message.code} - ${message.statusText})`;
      this.messageService.add({
        severity: message.severity,
        summary: message.summary,
        detail: userMessage
      })
    })

  }

}
