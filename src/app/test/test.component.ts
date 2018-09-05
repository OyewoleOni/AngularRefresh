import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  //styleUrls: ['./test.component.css']
  styles:[`
  div {
    color:red;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Codevolution";

  public hasError= false;
  public isSpecial = true;
  public highLightColor="orange";
  public myId="testId";
  public isDisabled=false;
  public successClass="text-success";
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
public greeting:string;  

public name1:string;
  public titleStyles={
    color :"blue",
    fontStyle:"italic"
  }

  onClick(event){
    console.log(event);
    this.greeting="Welcome";
  }
  constructor() { }

  ngOnInit() {
  }

}
