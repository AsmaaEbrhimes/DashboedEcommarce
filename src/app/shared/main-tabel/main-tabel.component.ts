import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-tabel',
  templateUrl: './main-tabel.component.html',
  styleUrl: './main-tabel.component.scss'
})
export class MainTabelComponent<T extends object> {

  @Input() BodyData: T[] = [];
  @Input() page: string = '';


  getHeadKeys(): string[] {
    return this.BodyData.length > 0 ? Object.keys(this.BodyData[0]) : [];
  }
}
