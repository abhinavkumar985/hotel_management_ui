import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { MessagePopupComponent } from "src/app/common/message-popup/message-popup.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data = [];
  constructor(private homeService:HomeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.homeService.getDashBoard().subscribe(res => {
      if(res['status']){
        this.data = res['data'];
      }else{
        this.showDialogMsg({ title: 'Failed', message: res['msg'] })
      }
    },err =>{
      this.showDialogMsg({ title: 'Failed', message: 'Unable to connect to server.' });
    });
  }
  getColor(i){
    if(i === 0){
      return 'red';
    }
    if(i === 1){
      return 'black';
    }
    if(i === 2){
      return 'green';
    }
    if(i === 3){
      return 'purple';
    }
    if(i === 4){
      return 'yellow';
    }
    if(i === 5){
      return 'pink';
    }
  }
  showDialogMsg(data) {
    const dialogRef = this.dialog.open(MessagePopupComponent, {
      width: '500px',
      data: data
    });
  }
}
