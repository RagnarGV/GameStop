import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GameStop';
  username: any;
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log(this.username);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  onGameStopClick() {
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username')) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    } else {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }
  }
}
