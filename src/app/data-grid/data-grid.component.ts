import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
