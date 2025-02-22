import { Component, OnInit, Input, Output, EventEmitter, HostListener, output } from '@angular/core';
import { navbarData } from '../../../Core/scripts/constant.data';
import { INavbarData } from '../../../Core/interfaces/navbar.interface';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';
import { FadeinAndFadeout } from '../../../Core/animations/fadeinandfadeout-anmations';

@Component({
  selector: 'app-menuebar',
  templateUrl: './menuebar.component.html',
  styleUrl: './menuebar.component.scss',
  animations: [slideToggleAnimation, FadeinAndFadeout]

})
export class MenuebarComponent implements OnInit {
  private _collapsed: boolean = true;
  @Output() CollapsedMenue = new EventEmitter<boolean>();
  @Output() returnDefaultMenue = new EventEmitter<boolean>()
  @Input()
  set collpsed(value: boolean) {
    this._collapsed = value;
  }

  get collpsed(): boolean {
    return this._collapsed;
  }
  datamenue: INavbarData[] = [];
  closebsed: any
  itemlabel: string = ''
  ngOnInit(): void {
    this.dataMenue();
  }

  dataMenue(): void {
    this.datamenue = navbarData.map((item) => ({
      ...item,
    }));
  }

  toggleSubMenu(item: INavbarData): void {
    this.datamenue.forEach((menuItem) => {
      if (menuItem !== item) {
        menuItem.isOpen = false;
      }
    })
    item.isOpen = !item.isOpen;
  }


  closemMenue() {
    this.CollapsedMenue.emit(false)
  }

  activeRoute(item: INavbarData) {
    this.returnDefaultMenue.emit(false)
    this.itemlabel = item.label
  }
}




























