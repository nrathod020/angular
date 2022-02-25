import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rathod Nirmal';

  students = [{name:"yash", branch:"CE"},{name:"Nirmal", branch:"Chemistry"}, {name:"Sagar", branch:"CE"},{name:"Vipul", branch:"IT"},{name:"Mihir", branch:"CE"},{name:"Sahil", branch:"IT"}]

}
