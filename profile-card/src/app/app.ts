import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name: string = 'Kyle Butler';
  age: number = 40;
  description: string = "A passionate developer learning Angular"
}
