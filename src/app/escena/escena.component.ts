import { Component, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
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



