import { trigger, transition, style, animate } from '@angular/animations';

export const FadeinAndFadeout = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-10px)' }),
    animate('100ms ease-out', style({ opacity: 1})),
  ]),
  transition(':leave', [
    animate('0ms ease-in', style({ opacity: 0})),
  ]),
]);
