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
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];


  constructor() {

    // 2sec wait
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  // event binding
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
