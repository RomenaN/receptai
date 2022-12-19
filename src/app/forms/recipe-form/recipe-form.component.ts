import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}
  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      duration: ['', [Validators.required, this.durationValidator]],
      description: ['', Validators.required],
      photo: ['', this.photoValidator],
      calories: '',
      allergens: this.formBuilder.array(['']),
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          name: '',
          quantity: '',
          unit: '',
        }),
      ]),
    });
  }

  durationValidator(control: FormControl) {
    const duration = control.value;
    if (duration % 5 !== 0) {
      return { invalidDuration: true };
    }
    return null;
  }

  photoValidator(control: FormControl) {
    const photo = control.value;
    if (
      photo &&
      !photo.match(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      )
    ) {
      return { invalidPhoto: true };
    }
    return null;
  }

  get allergens(): FormArray {
    return this.recipeForm.get('allergens') as FormArray;
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addAllergen() {
    this.allergens.push(new FormControl(''));
  }

  removeAllergen() {
    this.allergens.removeAt(this.allergens.length - 1);
  }

  addIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        name: '',
        quantity: '',
        unit: '',
      })
    );
  }

  removeIngredient() {
    this.ingredients.removeAt(this.ingredients.length - 1);
  }

  submit() {
    // this.recipeService.create(this.recipeForm.value).then(() => {
    //   this.recipeForm.reset();
    // });
  }
}
