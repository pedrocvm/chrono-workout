import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./sass/config.component.scss'],
})
export class ConfigComponent{
  isEditing: boolean = false;
  hasError: boolean = false;

  @Input()
  exercises: Exercise[] = [];

  exercise: Exercise = {
    name: '',
    duration: '',
    repetitions: '',
    sets: '',
    weight: '',
    rest: ''
  };

  add() {
    if (this.exercise.name) {
      this.hasError = false;
      this.exercises.push(this.exercise);
      this.exercise = { ...this.exercise, name: '' };
    } else {
      this.hasError = true;
      return;
    }

    this.exercise = {
      name: '',
      duration: '',
      repetitions: '',
      sets: '',
      weight: '',
      rest: ''
    };
  }

  handleEdit(e: number) {
    this.isEditing = true;
    this.exercise = this.exercises[e];
  }

  edit() {
    const index = this.exercises.findIndex((ex) => ex == this.exercise);

    if (this.exercise.name) {
      this.exercises[index] = this.exercise;
      this.exercise = { ...this.exercise, name: '' };
      this.isEditing = false;
      this.hasError = false;
    } else {
      this.hasError = true;
      return;
    }

    this.exercise = {
      name: '',
      duration: '',
      repetitions: '',
      sets: '',
      weight: '',
      rest: ''
    };
  }

  remove(e: number) {
    this.exercises.splice(e, 1);
  }
}
