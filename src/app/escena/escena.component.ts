import { Component, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { IStep } from '../i-step';




@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent { 
@Input() steps:IStep[]=[];
}
