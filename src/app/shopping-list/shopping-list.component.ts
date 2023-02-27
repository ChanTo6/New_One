import { Component } from '@angular/core';
import { Ingredients } from '../Ingredients/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10)
  
  
  ];
  
}
