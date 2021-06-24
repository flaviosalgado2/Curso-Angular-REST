import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //atributos criados
  usuario = { login: '', senha: '' };

  constructor(private loginService: LoginServiceService){}

  //metodo criado
  public login() {
    //console.log("Teste Login: " + this.usuario.login + " senha: " + this.usuario.senha);
    this.loginService.login(this.usuario);

  }

  ngOnInit() {
  }

}
