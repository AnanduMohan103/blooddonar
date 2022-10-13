import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deledonar',
  templateUrl: './deledonar.component.html',
  styleUrls: ['./deledonar.component.css']
})
export class DeledonarComponent implements OnInit {

  constructor() { }
  idDonar=""
  readValue=()=>{
    let data={
      "idDonar":this.idDonar
  
    
    }
    console.log(data)
  }
  
  
  ngOnInit(): void {
  }
}

