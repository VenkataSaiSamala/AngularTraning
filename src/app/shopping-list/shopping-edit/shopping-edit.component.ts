import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('inputName') nameElement: ElementRef;
@ViewChild('inputAmount') amountElement: ElementRef;
@Output() addIngredient = new EventEmitter<Ingredient>();


constructor(){}

ngOnInit(){

}

onAddItem(){
 const nameElementValue = this.nameElement.nativeElement.value;
 const amountElementValue = this.amountElement.nativeElement.value;
 const newIngredient = new Ingredient(nameElementValue, amountElementValue)
 this.addIngredient.emit(newIngredient);
}
}