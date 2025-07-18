import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { brandAction } from '../Store/Types-brand/Types';
import { BrandState } from '../Store/Reducer-brand/Reducer';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';
import { brandObj } from '../Interface';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',

  animations: [slideToggleAnimation],

})
export class BrandsComponent implements OnInit {
  brandObj = signal<any | undefined>(undefined);
  ToggelFormSepasificBrand = signal<boolean>(false);


  constructor(private Store: Store<{ brand: BrandState }>) {}

  ngOnInit(): void {
    this.setDtaInLocalStorage();
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
      (brandState:any) => {
        this.brandObj.set(brandState);
      }
    );
  }

  IsToggelForm(){
    this.ToggelFormSepasificBrand.set(!this.ToggelFormSepasificBrand())
  }
}
