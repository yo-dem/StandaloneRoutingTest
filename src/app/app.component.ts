import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainShellComponent } from './main-shell/main-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'StandaloneRoutingTest';
}
