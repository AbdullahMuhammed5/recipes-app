import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, 
                private recipeService: RecipeService,
                private authservice: AuthService){}

    storeRecipes(){
        const token = this.authservice.getTocken();
        
        return this.http.put("https://shopping-app-8e15e.firebaseio.com/recipes.json?auth="+token , 
        this.recipeService.getRecipes());
    }
    
    getRecipes(){
        const token = this.authservice.getTocken();

        this.http.get<Recipe[]>("https://shopping-app-8e15e.firebaseio.com/recipes.json?auth="+token).pipe(
        map(
            (res) => {
                for(let recipe of res){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = []
                    }
                }
                return res;
            } 
        ))
        .subscribe(
            (response) => {
                this.recipeService.setRecipes(response)
            }
          );
    }

}