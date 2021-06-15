import { Component } from '@angular/core';
//adicionado um sevico
import { LoginServiceService } from './service/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';

  //atributos criados
  usuario = { login: '', senha: '' };

  constructor(private loginService: LoginServiceService){}

  //metodo criado
  public login() {
    //console.log("Teste Login: " + this.usuario.login + " senha: " + this.usuario.senha);
    this.loginService.login(this.usuario);

  }
}
