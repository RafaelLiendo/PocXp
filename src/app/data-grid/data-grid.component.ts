import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  customers: Customer[] = [
    {CompanyName: 'XP Investimentos', City: 'São Paulo', State: 'SP', 'Phone': '12345678', Fax: '123456' },
    {CompanyName: 'Ricco', City: 'São Paulo', State: 'SP', 'Phone': '12345678', Fax: '123456' }
  ];

  constructor() { }

  ngOnInit() { }

}

interface Customer {
  CompanyName: string;
  City: string;
  State: string;
  Phone: string;
  Fax: string;
}
