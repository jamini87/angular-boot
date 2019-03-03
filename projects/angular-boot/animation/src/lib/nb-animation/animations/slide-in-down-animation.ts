/**
 * Created by Jafar Amini in March 2018.
 */
import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
// Component transition animations
export const slideInDownAnimation: AnimationTriggerMetadata =
  trigger('slideInOut', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.6s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
