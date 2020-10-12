import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./sass/timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  exercises: Exercise[] = [];
  currentEx: number = 0;
  currentSet: number = 1;
  phase: number;
  isPaused: boolean;
  timer: NodeJS.Timeout;
  timeleft: number;
  isStarted: boolean = false;
  isFinished: boolean = false;
  animation: string;

  restart() {
    this.phase = 0;
    this.timer = undefined;
    this.timeleft = this.exercises[this.currentEx].duration;
    this.isPaused = false;
    this.isFinished = false;
  }

  changePhase() {
    this.phase >= 0 && this.phase < 2 ? this.phase++ : (this.phase = 0);
  }

  nextExercise() {
    this.phase = 0;
    this.currentEx < this.exercises.length - 1 ? this.currentEx++ : '';
    this.currentSet = 1;
    this.timeleft = this.exercises[this.currentEx].duration;
    this.isFinished = false;
  }

  previousExercise() {
    this.phase = 0;
    this.currentEx >= 1 ? this.currentEx-- : '';
    this.currentSet = 1;
    this.timeleft = this.exercises[this.currentEx].duration;
    this.isPaused = false;
    this.isFinished = false;
  }

  nextSet() {
    this.phase = 2;

    this.currentSet <= this.exercises[this.currentEx].sets - 1
      ? this.currentSet++
      : '';

    this.timeleft = this.exercises[this.currentEx].duration;
    this.isPaused = false;
    this.isFinished = false;
  }

  previousSet() {
    this.currentSet >= 1 ? this.currentSet-- : '';
    this.phase = 0;
    this.timeleft = this.exercises[this.currentEx].duration;
    this.isFinished = false;
  }

  start() {
    this.phase = 1;
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.timeleft > 0) {
          this.timeleft -= 0.01;
          this.isFinished = false;
        } else {
          this.timeleft = 0;
          clearInterval(this.timer);
          this.timeleft = this.exercises[this.currentEx].duration;
          this.nextSet();
          this.isStarted = false;
          this.isFinished = true;
        }
      }, 10);
    } else {
      this.timer = undefined;
      this.start();
    }

    this.handleCircle();
  }

  pause() {
    clearInterval(this.timer);
    this.timer = undefined;
    this.phase = 0;
    this.isStarted = false;
  }

  handleCircle() {
    this.isStarted = true;

    this.animation = `load ${this.exercises[this.currentEx].duration}s linear`;

    let start = 1;

    let time = setInterval(() => {
      if (start === 100) {
        clearInterval(time);
      }
    });
  }

  reset(){
    this.phase = 0;
    this.timer = undefined;
    this.isPaused = false;
    this.isFinished = false;
    this.isStarted = false;
    this.currentEx = 0;
    this.currentSet = 1;
    this.timeleft = this.exercises[this.currentEx].duration;
  }

  formatNumber(n:number){
    
    return n.toString().substring(0, 4);
    
  }

  ngOnDestroy() {
    this.pause();
  }

  ngOnInit() {
    this.restart();
  }
}
