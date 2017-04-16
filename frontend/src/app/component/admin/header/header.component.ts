import { Component, OnInit } from '@angular/core';
import {IMG_URL} from "../../../util";


@Component({
  selector: 'app-admin-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  public imgLogo = IMG_URL + "logo.png";

  constructor() { }

  ngOnInit() {
  }

}
