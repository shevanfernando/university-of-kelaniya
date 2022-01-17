import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { room } from "../model/booking-model";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent implements OnInit {

  rooms?: room[];

  bookedRooms?: number[];
  availableRooms?: number[];

  constructor(private router: Router) {
    this.bookedRooms = [1, 3, 5, 8];
    this.availableRooms = [2, 4, 6, 7, 9];

    this.rooms = [{ no: 1, is_booked: true, no_seats: 24 }, { no: 2, is_booked: false, no_seats: 24 }, {
      no: 3,
      is_booked: true,
      no_seats: 24
    }, { no: 4, is_booked: false, no_seats: 24 }, { no: 5, is_booked: true, no_seats: 24 }, {
      no: 6,
      is_booked: false,
      no_seats: 24
    }, { no: 7, is_booked: false, no_seats: 24 }, { no: 8, is_booked: true, no_seats: 24 }, {
      no: 9,
      is_booked: false,
      no_seats: 24
    }];
  }

  ngOnInit(): void {
  }

  onClickNext() {

  }
}
