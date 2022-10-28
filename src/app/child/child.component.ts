import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
  implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked

  {
  counter = 0;
  interval: any;
  @Input()
  username = "";

  @ContentChild('projectedContent') projectedContent: any;

  constructor() {
    console.log("Child Constructor is called");
  }

  ngOnInit(): void {
    console.log("Child OnInit is called");
    console.log('OnInit - ' + this.projectedContent);

    // this.interval= setInterval(()=>{
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // },1000);
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log("Child OnDestory is called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child onChanges is called");
    console.log('OnChanges - ' + this.projectedContent);
  }

  ngDoCheck() {
    console.log("Child DoCheck is called");
    console.log('DoCheck - ' + this.projectedContent);
  }
  ngAfterContentInit() {
    console.log("In After Content Init");
    console.log('After content Init- ' + this.projectedContent);
  }
  ngAfterContentChecked() {
    console.log('In After Content Checked');
  }
  ngAfterViewInit(){
    console.log('in After View Init');
  }
  ngAfterViewChecked() {
    console.log('in After View Checked');
  }

}
