import { Component, OnInit } from '@angular/core';

@Component({

// SELECTORS -> 3 ways

  selector: 'app-servers',

  // <app-servers> </app-servers>
    // in app.component.html

// selector: '[app-servers]',

    // <div app-servers> </div>
    // in app.component.html

// selector: '.app-servers',

    // <div class="app-servers"> </div>
    // in app.component.html


// TEMPLATES -> 2 ways

// EXTERNAL
  templateUrl: './servers.component.html',

// INLINE
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
