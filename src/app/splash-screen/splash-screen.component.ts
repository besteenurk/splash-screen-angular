import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  splash = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.splash = !this.splash;
    }, 5000);
  }
}