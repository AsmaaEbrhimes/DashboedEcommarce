import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-tabel',
  templateUrl: './main-tabel.component.html',
  styleUrl: './main-tabel.component.scss'
})
export class MainTabelComponent {

  @Input() Dataheader: any;
  @Input() BodyData: any[] = [];


  getHeadKeys(): string[] {
    if (this.Dataheader) {
      return Object.keys(this.Dataheader);
    }
    return this.BodyData.length > 0 ? Object.keys(this.BodyData[0]) : [];
  }
}
