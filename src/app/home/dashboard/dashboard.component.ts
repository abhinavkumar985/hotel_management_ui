import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data = [
    { count: 22, label: "Rooms Occupied" },
    { count: 12, label: "Checkd In Guests" },
    { count: 32, label: "Rooms Available" },
    { count: 132, label: "All Guests" },
    { count: 332, label: "Total Booking" },
    { count: 18, label: "Total Staff" }
  ];
  constructor() {}

  ngOnInit() {}
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
}
