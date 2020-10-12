import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: boolean = false;

  exercises: Exercise[] = [
    {
      name: 'Teste',
      duration: 5,
      repetitions: 10,
      sets: 3,
      weight: 10,
      rest: 0,
    },
    {
      name: 'Supino Reto',
      duration: 30,
      repetitions: 10,
      sets: 3,
      weight: 30,
      rest: 30,
    },
    {
      name: 'Crucifixo Inclinado',
      duration: 30,
      repetitions: 12,
      sets: 4,
      weight: 40,
      rest: 20,
    },
    {
      name: 'Voador',
      duration: 45,
      repetitions: 10,
      sets: 3,
      weight: 20,
      rest: 30,
    },
    {
      name: 'Crossover',
      duration: 30,
      repetitions: 12,
      sets: 4,
      weight: 50,
      rest: 20,
    },
  ];
}
