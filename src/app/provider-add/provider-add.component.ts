import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {

  provider:any;

  constructor(private serviceProviders:ProvidersService, private router:Router) { }

  ngOnInit(): void {
  }

  createProvider(myForm:any){
    this.serviceProviders.createProvider(myForm).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['listProvider']);

      }
    );

  }

}
