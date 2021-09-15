import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//adicionado - com isso dar pra trabalhar com submit de formularios
import { FormsModule } from '@angular/forms';

//adicionado - para fazer requisicoes AJAX
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

//adicionado para posssibilitar rotas no Angular
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';

//interceptacao de token requisicao
import { HttpInterceptorModule } from './service/header-interceptor.service';

export const appRouters: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
