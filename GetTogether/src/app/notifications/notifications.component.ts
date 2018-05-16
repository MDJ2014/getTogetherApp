import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DbServiceService } from '../db-service.service';
import { Notification } from '../notifications/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']

})




export class NotificationsComponent implements OnInit {



  notifications:  Notification[] = [];




  constructor(private dbService: DbServiceService) { }

  ngOnInit() {
    // Retrieve posts from the API
  //  this.dbService.getAllNotifications("5adce300bd17584c200cf7eb").subscribe(notifications => {
   //   this.notifications.push(notifications);
     // this.notifications = notifications;
   //   console.log(notifications);
   // });

  }

}
