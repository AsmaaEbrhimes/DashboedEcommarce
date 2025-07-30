import { CoreServiesService } from './../../Core/servies/core-servies.service';
import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../Store/Reducer/reducer';
import { ActionApp } from '../../Store/Types/Types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy, OnInit {
  isMenuCollapsed: boolean = true;
  isScrolled = false;
  successMessage$!: Observable<boolean>;

  @Output() isCollapsed = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.ShowMessageSucces();
  }

  constructor(
    private store: Store<{ app: AppState }>,
    private coreServies: CoreServiesService
  ) {}

  toggelMenue() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (window.innerWidth >= 320 && window.innerWidth <= 1200) {
      this.isCollapsed.emit(true);
    } else {
      this.isCollapsed.emit(this.isMenuCollapsed);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  ShowMessageSucces() {
    this.successMessage$ = this.store.select((state) => state.app.success);
    this.successMessage$.subscribe((successMessage) => {
      if (successMessage) {
        this.coreServies.processSuccessAuth();
        setTimeout(() => {
          this.store.dispatch(ActionApp.ClearSucessProccing());
        }, 2000);
      }
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
