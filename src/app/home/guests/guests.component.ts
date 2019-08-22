import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { GuestService } from './guest.service';
import { MessagePopupComponent } from 'src/app/common/message-popup/message-popup.component';
import { MatDialog } from '@angular/material';
import * as _ from 'underscore';
@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
  providers:[GuestService]
})
export class GuestsComponent implements OnInit {


  displayedColumns: string[] = ['customer_name', 'customer_address', 'customer_city', 'customer_state' ,'checkIn_date', 'checout_date','id_proof_type','id_proof_number', 'isCheckedOut'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private guestService:GuestService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.guestService.getAllGuest().subscribe(res => {
      if(res['status']){
        for(let i=0;i<res['data'].length;i++){
          res['data'][i]['isCheckedOut'] = res['data'][i]['checout_date'].length > 0;
          res['data'][i]['selected'] =  false;
        }
        this.dataSource.data = res['data'];
      }else{
        this.showDialogMsg({ title: 'Failed', message: res['msg'] })
      }
    },err =>{
      this.showDialogMsg({ title: 'Failed', message: 'Unable to connect to server.' });
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getDisable(){
    let toSend = _.where(this.dataSource.data, {selected:true});
    return toSend && toSend.length > 0;

  }
  showDialogMsg(data) {
    const dialogRef = this.dialog.open(MessagePopupComponent, {
      width: '500px',
      data: data
    });
  }
}
