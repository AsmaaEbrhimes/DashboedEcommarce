import { Component } from '@angular/core';
import { statisticedata } from '../../../Core/scripts/statistice.data';
import { statistice } from '../../../Core/interfaces/statistice.interface';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.scss'
})
export class FirstpageComponent {
  ngOnInit(): void {
    this.getAllStatistice()
  }
  arraystatisticedata: statistice[] = []
  getAllStatistice() {
    this.arraystatisticedata = statisticedata
  }
}
