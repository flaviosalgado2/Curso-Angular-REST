import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styles: []
})
export class UsuarioAddComponent implements OnInit {

  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      console.log('Valor sendo editado: ', id);
    }
  }

}
