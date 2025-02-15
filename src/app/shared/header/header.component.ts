import { Component, HostListener, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy{
  isMenuCollapsed: boolean = true;
  isScrolled = false;

  @Output() isCollapsed = new EventEmitter<boolean>();

  toggelMenue() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isCollapsed.emit(this.isMenuCollapsed);
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

ngOnDestroy(): void {
  window.removeEventListener('scroll', this.onScroll);
}
}
