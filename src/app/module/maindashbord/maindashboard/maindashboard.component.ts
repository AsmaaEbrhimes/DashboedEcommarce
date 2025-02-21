import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.scss'
})
export class MaindashboardComponent {
  collpsed: boolean = true;
  returncollpased:boolean = false
  custemResponsive: boolean = false
  smallresponsive: boolean = false
  ngOnInit() {
    this.updateSidenavState();
  }

  toggelEvent(event: any) {
    this.collpsed = event;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidenavState();
  }

  returnDefauleMenue(event:boolean){
this.returncollpased = event
  }

  updateSidenavState() {
    const screenWidth = window.innerWidth;
    this.smallresponsive = false;
    if (screenWidth <= 767) {
      this.collpsed = false;
      this.custemResponsive = true;

      // if(this.returncollpased == false){

      // }
    }

    else if (screenWidth >= 767 && screenWidth <= 1200) {
      this.collpsed = false;
      this.custemResponsive = false;
      this.smallresponsive = true;
    }
  }

  CloseMneueEvent(event: any) {
    this.collpsed = event;
  }
}
