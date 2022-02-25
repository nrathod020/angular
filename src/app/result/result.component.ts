import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  students = [{name:"yash", result:"94%"},{name:"Nirmal", result:"78%"}, {name:"Sagar", result:"99%"},{name:"Vipul", result:"92%"},{name:"Mihir", result:"89%"},{name:"Sahil", result:"80%"}]

}
