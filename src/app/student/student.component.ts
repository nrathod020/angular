import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [{name:"yash", branch:"CE"},{name:"Nirmal", branch:"Chemistry"}, {name:"Sagar", branch:"CE"},{name:"Vipul", branch:"IT"},{name:"Mihir", branch:"CE"},{name:"Sahil", branch:"IT"}]


  constructor() { }

  ngOnInit(): void {
  }

  show(name:any){
    console.log(name.value)
  }
}
