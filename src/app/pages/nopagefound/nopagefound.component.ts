import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'  ]
})
export class NopagefoundComponent  {

  anno = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
