import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {

  //two booleans
  sweet: boolean = false;
  salty: boolean = false;
  constructor() { };
  ngOnInit(): void {
    this.salty = localStorage.getItem("salty") != null;
    this.sweet = localStorage.getItem("sweet") != null;
  }

  updateSweet() {
    console.log("sweet value is " + this.sweet);
    this.sweet ? localStorage.setItem("sweet", "true") : localStorage.removeItem("sweet");
  }
  updateSalty() {
    console.log("salty value is " + this.salty);

    this.salty ? localStorage.setItem("salty", "true") : localStorage.removeItem("salty");
  }

}
