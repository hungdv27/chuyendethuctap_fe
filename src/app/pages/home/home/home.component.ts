import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }
  lst = {

    ungtuyen:"30",
    datCV:"28",
    datPV:"10",
    trungtuyen:"3",
    truot:"27"
}
  ngOnInit(): void {
  }

}
