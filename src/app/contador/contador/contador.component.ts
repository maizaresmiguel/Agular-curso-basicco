import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    <h1> Acumulador en {{base  }} </h1>
    <button (click)="acumular(base);">+1</button>

    <h1> {{ numero }} </h1>
    <button (click)="acumular(-base);">-1</button>
    `
})
export class ContadorComponent{
    titulo: string = 'contador app';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number){
        this.numero+=valor;
  }

}