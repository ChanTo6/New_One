import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
recipes: Recipe[] =[
  new Recipe('Name', 'Description', 
  'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg'),
  new Recipe('Name', 'Description', 
  'https://gastronomia.ge/wp-content/uploads/2019/02/jhu.jpg')
];


constructor(){

}

}



