import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
  constructor(){}
  public getInputValue(inputValue:string){
    console.log(inputValue);

}
}


