import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//adicionado um sevico
import { LoginServiceService } from './service/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Curso-Angular-REST';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }
  }

  public sair(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
