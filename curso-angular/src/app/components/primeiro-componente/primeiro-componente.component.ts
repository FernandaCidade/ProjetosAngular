import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent implements OnInit{

  //Interpolação de dados
  name: string = "Fernanda"; // pode trabalhar com typescript
  age: number= 26;
  job =  "Programmer";
  //Criando arrey
  hobbies = ['Treinar', 'Jogar', 'Estudar']

  car = {
    nome: 'Polo',
    ano: 2020,
  };

  constructor(){

  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
