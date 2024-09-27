import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../servicios/steps.service';
import { IStep } from '../interficies/i-step';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  steps:IStep[] = [];
  constructor(public stepService: StepsService) {
  }
  ngOnInit(): void {
    this.steps = this.stepService.getSteps();
  }
}
