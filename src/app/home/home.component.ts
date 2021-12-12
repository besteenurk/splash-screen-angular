import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flipped: boolean = false;

  constructor() { }

  ngOnInit(): void {    
  }
  
  toggleFlip() {
    this.flipped = !this.flipped;
  }
 }
