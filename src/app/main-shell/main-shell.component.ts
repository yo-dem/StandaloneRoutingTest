import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-shell',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-shell.component.html',
  styleUrl: './main-shell.component.css',
})
export class MainShellComponent {}
