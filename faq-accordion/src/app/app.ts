import { Component, signal } from '@angular/core';
import { Accordion } from "./accordion/accordion";

@Component({
  selector: 'app-root',
  imports: [Accordion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
