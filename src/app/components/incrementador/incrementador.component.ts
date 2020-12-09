import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }
  
  // @Input('valor') progreso = 15;
  @Input('valor') progreso = 15;
  @Input() btnClass: string ='btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

    
  cambiarValor( valor: number ) {
    if(this.progreso > 99 && valor >= 0 ){
      this.valorSalida.emit(100);
      this.progreso = 95;
    }
    if(this.progreso < 0 && valor < 0){
      this.valorSalida.emit(0);
      this.progreso = 0;
    }    
    this.progreso = this.progreso +  valor ;
    this.valorSalida.emit(this.progreso);
  }  
  onChange( valor: number) {
    if(valor >100 ){
      this.progreso = 100;
    } else if( valor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorSalida.emit( this.progreso);
    
  }

  private newMethod(valor: number) {
    {
      this.progreso = valor;
    }
  }
}