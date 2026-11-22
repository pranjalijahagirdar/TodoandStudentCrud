import { Component, OnInit } from '@angular/core';
import { Imobile } from '../model/mobile.interface';
import { mobileArr } from '../const/mobile.data';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {
mobileArr : Array<Imobile> = mobileArr
  constructor() { }

  ngOnInit(): void {
  }

}
