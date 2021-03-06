import { RecipeNutritionModalComponent } from './../recipe-nutrition-modal/recipe-nutrition-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-extra-info',
  templateUrl: './recipe-extra-info.component.html',
  styleUrls: ['./recipe-extra-info.component.css'],
})
export class RecipeExtraInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  name: string;

  constructor(
    private queryService: QueryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getName();
  }

  getName() {
    if (this.cocktail) {
      this.name = this.cocktail.name;
    }
  }

  // getNutrition() {
  //   console.log(this.name);
  //   this.queryService.getNutritionFacts(this.name).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  open(): void {
    const modalRef = this.modalService.open(RecipeNutritionModalComponent);
    modalRef.componentInstance.name = this.name;
  }
}
