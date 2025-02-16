
import { trigger, style, transition, animate } from '@angular/animations';

export const slideToggleAnimation = trigger('slideToggle', [
  transition(':enter', [
    style({ height: '0px', overflow: 'hidden' }),
    animate('300ms ease-in-out', style({ height: '*' })),
  ]),
  transition(':leave', [
    style({ height: '*', overflow: 'hidden' }),
    animate('300ms ease-in-out', style({ height: '0px' })),
  ]),
]);

