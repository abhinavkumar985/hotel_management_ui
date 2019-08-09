import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from './login.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessagePopupComponent } from '../common/message-popup/message-popup.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService:LoginService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  

  submit() {
    
    if (this.form.valid) {
      // console.log(this.form.value);
      this.loginService.authUser(this.form.value).subscribe(res=>{
        if(res['status']){
          const dialogRef = this.dialog.open(MessagePopupComponent, {
            width: '500px',
            data: {title: 'Success', message: res['msg']}
          });
          sessionStorage.setItem('user',JSON.stringify(res['data'][0]));
          this.router.navigate(['home']);
        }else{
          const dialogRef = this.dialog.open(MessagePopupComponent, {
            width: '500px',
            data: {title: 'Failed', message: res['msg']}
          });
        }
        
      },err =>{
        const dialogRef = this.dialog.open(MessagePopupComponent, {
          width: '500px',
          data: {title: 'Failed', message: 'Unable to connect to server.'}
        });
      });
    }
  }
}
