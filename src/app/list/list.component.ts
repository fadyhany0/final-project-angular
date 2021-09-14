import { ApiFunctionService } from './../shared/api-function.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allData: [];

  constructor(private serv : ApiFunctionService) {
    this.serv.getteacher().subscribe((data : any) =>{
      this.allData = data           
    })
   }

   delete(id){
      this.serv.delete(id).subscribe(data=>{
        location.reload();
      })
   }


  ngOnInit(): void {
  }

}
