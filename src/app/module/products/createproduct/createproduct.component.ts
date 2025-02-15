import { Component } from '@angular/core';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.scss'
})
export class CreateproductComponent {
  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
