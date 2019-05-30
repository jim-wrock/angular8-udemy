import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',

  // 2 façons d'utiliser les styles (l'une ou l'autre) ->

  // fichier externe ->

  styleUrls: ['./app.component.css']

// inline via array + backticks ->

//   styles: [`
//   h3 {
//     color: dodgerblue
//   }
//   `]

})
export class AppComponent {
}
