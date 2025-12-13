import { CommonModule } from '@angular/common';
import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
})
export class Stopwatch {
  elapsedTime = signal(0);
  isRunning = signal(false);
  intervalRef: any;

  private start() {
    this.isRunning.set(true);
    this.intervalRef = setInterval(() => {
      this.elapsedTime.update(v => v + 0.1);
    }, 100)
  }

  private stop() {
    this.isRunning.set(false);
    clearInterval(this.intervalRef)
  }

  reset() {
    this.stop();
    this.elapsedTime.set(0);
  }

  startstop() {
    this.isRunning() ? this.stop() : this.start();
  }
}
