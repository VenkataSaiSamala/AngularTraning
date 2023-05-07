import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient('Pears', 4)
];
 
constructor(){
}

ngOnInit(){
}

onIngridentAdded(ingredient: Ingredient){
  this.ingredients.push(ingredient);
}

}
