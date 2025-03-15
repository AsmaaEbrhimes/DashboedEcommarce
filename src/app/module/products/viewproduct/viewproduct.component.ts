import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.scss'
})
export class ViewproductComponent implements OnInit {
  toggeltap = signal<boolean>(false)
  ngOnInit(): void {

  }

  ToggelTap() {
    this.toggeltap.set(!this.toggeltap())
  }
}
