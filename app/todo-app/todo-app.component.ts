import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.sass'
})
export class TodoAppComponent {

  name:string=""
  list:string[]=[

  ]
  getname(salam : any){
    console.log(salam.target.value);
    this.name=salam.target.value
  }
  dontknow(){
    this.list.push(this.name)
  }
  delete(give : any){
    this.list.splice(give ,1 )
  }

}
