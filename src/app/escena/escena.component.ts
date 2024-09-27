import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition,  style, animate } from '@angular/animations';




@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
  animations: [
  trigger('transicion', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.99)' }),
      animate('50ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [
      animate('50ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
    ])
  ])
]
})
export class EscenaComponent { 
@Input() steps:IStep[]=[];

constructor(library: FaIconLibrary) {
  library.addIcons(faArrowRight);
  library.addIcons(faArrowLeft);
}

currentStep: number = 0
nextStep(){
if(this.currentStep < this.steps.length - 1 ){
  this.currentStep++ }
}

beforeStep(){
  if(this.currentStep > 0 ){
    this.currentStep-- }
  }

}



