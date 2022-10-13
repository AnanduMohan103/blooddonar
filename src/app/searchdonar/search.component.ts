import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  bloodgroup=""
  readValue=()=>{
    let data={
      "bloodgroup":this.bloodgroup
  
    
    }
    console.log(data)
  }

 
  ngOnInit(): void {
  }

}
