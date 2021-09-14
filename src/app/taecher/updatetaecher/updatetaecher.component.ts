import { ApiFunctionService } from './../../shared/api-function.service';
import { Component, OnInit } from '@angular/core';
import { taecher } from 'src/app/model/taecher';
import { ActionSequence } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetaecher',
  templateUrl: './updatetaecher.component.html',
  styleUrls: ['./updatetaecher.component.css']
})
export class UpdatetaecherComponent implements OnInit {
  model = new taecher;
  id: string;

  constructor(private srev: ApiFunctionService, private actveRoute : ActivatedRoute , private Router : Router) { this.id = this.actveRoute.snapshot.paramMap.get('id');

}

  ngOnInit(): void {
  }


update( ) {
  this.srev.put (this.model , this.id).subscribe(data=>{
    this.Router.navigateByUrl('lt');
  })
} 
}
