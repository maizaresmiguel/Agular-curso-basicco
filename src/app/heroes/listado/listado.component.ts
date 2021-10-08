import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes: string[]=['aa','bb','cc','dd','ee'];
  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
