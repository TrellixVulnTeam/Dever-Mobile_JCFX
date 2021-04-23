import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
  pecas = [
   'PEÇA 1 - Quantidade máxima = 100 - Quantidade minima = 30',
   'PEÇA 2 - Quantidade máxima = 200 - Quantidade minima = 60',
   'PEÇA 3 - Quantidade máxima = 300 - Quantidade minima = 90',
   'PEÇA 4 - Quantidade máxima = 400 - Quantidade minima = 120',
   'PEÇA 5 - Quantidade máxima = 500 - Quantidade minima = 150',
   'PEÇA 6 - Quantidade máxima = 600 - Quantidade minima = 180'];


}

