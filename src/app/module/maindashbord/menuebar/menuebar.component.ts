import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { navbarData } from '../../../Core/scripts/constant.data';
import { INavbarData } from '../../../Core/interfaces/navbar.interface';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';

@Component({
  selector: 'app-menuebar',
  templateUrl: './menuebar.component.html',
  styleUrl: './menuebar.component.scss',
  animations: [slideToggleAnimation]

})
export class MenuebarComponent implements OnInit {
  private _collapsed: boolean = true;
  @Output() CollapsedMenue = new EventEmitter<boolean>();

  @Input()
  set collpsed(value: boolean) {
    this._collapsed = value;
  }

  get collpsed(): boolean {
    return this._collapsed;
  }
  datamenue: INavbarData[] = [];
  closebsed: any
  ngOnInit(): void {
    this.dataMenue();
  }

  dataMenue(): void {
    this.datamenue = navbarData.map((item) => ({
      ...item,
    }));
  }

  toggleSubMenu(item: INavbarData): void {
    item.isOpen = !item.isOpen;
  }


  closemMenue() {
    this.CollapsedMenue.emit(false)
  }
}
