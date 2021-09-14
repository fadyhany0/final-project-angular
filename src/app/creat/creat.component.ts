import { taecher } from './../model/taecher';
import { ApiFunctionService } from './../shared/api-function.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {


  model = new taecher;

  constructor(private serv: ApiFunctionService , private router : Router )  { }

  ngOnInit(): void {
  }

  save() {
   this.serv.post(this.model).subscribe( data => {
     this.router.navigateByUrl('lt')
   })
  }
}
