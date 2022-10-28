import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnChanges, DoCheck{

  // isChild = false;
  isChild = true;
  username = "";
  constructor() {
    console.log("Parent Constructor is called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

  ngOnChanges(){
    console.log("Parent onChanges iis called");
  }

  ngDoCheck(){
    console.log("Parent DoCheck is called");
  }

  toggleChild(){
    this.isChild = !this.isChild;
  }
}
