import { Component } from '@angular/core';
import { StepsService } from '../steps.service';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  constructor ( public mesaggeText: StepsService){}
}
