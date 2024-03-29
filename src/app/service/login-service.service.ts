import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';

//adicionado para funcionar rotas
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router : Router) { }

  login(usuario) {

    console.log(usuario);

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      //corpo do meu retorno http
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      console.info("Token: " + localStorage.getItem("token"));

      this.router.navigate(['home']);

    },
    error => {
        console.error("Erro ao fazer login");
        alert('Acesso Negado!');
      }
    )
  }
}
