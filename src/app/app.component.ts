import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Elmemotest';
}
