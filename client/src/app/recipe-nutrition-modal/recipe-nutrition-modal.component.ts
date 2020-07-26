import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-nutrition-modal',
  templateUrl: './recipe-nutrition-modal.component.html',
  styleUrls: ['./recipe-nutrition-modal.component.css'],
})
export class RecipeNutritionModalComponent implements OnInit {
  @Input() public name;
  protein: string;
  carbs: string;
  fats: string;
  sugars: string;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private queryService: QueryService
  ) {}

  ngOnInit(): void {
    // console.log(this.name);
    this.getNutrition();
  }

  getNutrition() {
    this.queryService.getNutritionFacts(this.name).subscribe((data) => {
      console.log(data);
      // if (data.length) {
      //   var protein = `${data.foods[0].foodNutrients[0].value} ${data.foods[0].foodNutrients[0].unitName}`;
      //   var carbs = `${data.foods[0].foodNutrients[1].value} ${data.foods[0].foodNutrients[1].unitName}`;
      //   var fat = `${data.foods[0].foodNutrients[2].value} ${data.foods[0].foodNutrients[2].unitName}`;
      //   var sugars = `${data.foods[0].foodNutrients[8].value} ${data.foods[0].foodNutrients[8].unitName}`;
      // }
      // console.log(protein, carbs, fat, sugars);
    });
  }
}
