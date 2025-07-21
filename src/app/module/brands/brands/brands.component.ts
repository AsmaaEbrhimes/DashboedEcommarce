import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { brandAction } from '../Store/Types-brand/Types';
import { BrandState } from '../Store/Reducer-brand/Reducer';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';
import { brandObj } from '../Interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
  animations: [slideToggleAnimation],
})
export class BrandsComponent implements OnInit {

  brandsList = signal<brandObj[]>([]);
  IsExsistBrandObj = signal<boolean>(false);
  BrandObj = signal<brandObj|undefined>(undefined);
  BrandsForm = signal<FormGroup>(new FormGroup({}));
  ToggelFormSepasificBrand = signal<boolean>(false);

  constructor(
    private Store: Store<{ brand: BrandState }>,
    private FB: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setDtaInLocalStorage();
    this.createFormBrand();
  }

  setDtaInLocalStorage() {
    this.Store.dispatch(brandAction.AllBrand());
    const stored = localStorage.getItem('brands');
    const brands = stored ? JSON.parse(stored) : [];
    this.Store.dispatch(brandAction.LoadBrandFromLocalStorage({ brands }));
    this.ReadDataInLocalStorage();
  }

  ReadDataInLocalStorage() {
    this.Store.select((state) => state.brand.brands).subscribe(
      (brandState: brandObj[]) => {
        this.brandsList.set(brandState);
      }
    );
  }

  createFormBrand() {
    this.BrandsForm.set(
      this.FB.group({
        name: ['', Validators.required],
      })
    );
  }

  IsToggelForm() {
    this.BrandsForm()?.reset();
    this.IsExsistBrandObj.set(false);
    this.ToggelFormSepasificBrand.set(!this.ToggelFormSepasificBrand());
  }

  getControlName(controlName: string) {
    return this.BrandsForm().get(controlName) as FormControl;
  }

  AddBrand() {
    if (this.BrandsForm().invalid) {
      this.BrandsForm().markAllAsTouched();
      return;
    }
    this.Store.dispatch(
      brandAction.CreateBrand({ brandName: this.BrandsForm().value })
    );
  }

  ShowUiSepasificeEdit(brand: brandObj) {
    if (brand) {
      this.BrandObj.set(brand)
      this.IsExsistBrandObj.set(true);
      this.BrandsForm()?.patchValue({
        name: brand.name,
      });
      this.ToggelFormSepasificBrand.set(true);
    } else {
      this.IsExsistBrandObj.set(false);
      this.ToggelFormSepasificBrand.set(false);
      this.BrandsForm().reset();
    }
  }

  EditBrand() {
    this.Store.dispatch(brandAction.EditBrand({brandName:this.BrandsForm().value,id: this.BrandObj()?._id}))
  }
}
