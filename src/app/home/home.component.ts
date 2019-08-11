import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { MessagePopupComponent } from '../common/message-popup/message-popup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  position = '';
  username = '';
  constructor(private router: Router, private service: HomeService, public dialog: MatDialog) {
    let u = JSON.parse(sessionStorage.getItem('user'));
    this.position = u['position'];
    this.username = u['name'];
  }

  ngOnInit() {
  }
  navTo(path) {
    this.router.navigate(['/home/' + path]);
  }
  logout() {
    this.service.logout().subscribe(res => {
      if (res['status']) {
        this.showDialogMsg({ title: 'Success', message: res['msg'] });
        this.router.navigate(['/login']);
      } else {
        this.showDialogMsg({ title: 'Failed', message: res['msg'] });
      }
    }, err => {
      this.showDialogMsg({ title: 'Failed', message: 'Unable to connect to server.' });
    });
  }
  changePassword() {

  }
  showDialogMsg(data) {
    const dialogRef = this.dialog.open(MessagePopupComponent, {
      width: '500px',
      data: data
    });
  }
}
