import { Component, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent { 
@Input() steps:IStep[]=[];
}
