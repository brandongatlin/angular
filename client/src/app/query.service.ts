import { Cocktail } from './models/cocktail';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from './ingredient';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class QueryService {
  ingredientURL = 'http://localhost:3000/api/ingredient';
  cocktailURL = 'http://localhost:3000/api/cocktail';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Ingredient[]>('getIngredients', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailURL);
  }
}
