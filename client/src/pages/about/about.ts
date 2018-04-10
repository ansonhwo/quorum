import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';
import * as MainActions from '../../ngrx/actions/main';
import { Notification } from '../../ngrx/reducers/main';
import { Store } from '@ngrx/store';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  form: any = {
    title: '',
    content: ''
  };
  notifications: Observable<Notification[]>;

  constructor(
    public navCtrl: NavController,
    public store: Store<any>
  ) {
    this.notifications = this.store.select('main', 'notifications');
  }

  addNotification(): void {
    const id = Math.random().toString(36).substr(2, 10);
    this.store.dispatch(
      new MainActions.AddNotification({
        id,
        title: this.form.title,
        content: this.form.content
      })
    );
  }

  removeNotification(notification: Notification): void {
    this.store.dispatch(new MainActions.DeleteNotification({ id: notification.id }));
  }

  resetNotifications(): void {
    this.store.dispatch(new MainActions.ResetNotification({}));
  }
}
