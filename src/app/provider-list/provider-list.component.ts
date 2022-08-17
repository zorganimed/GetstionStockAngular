import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Avatar } from '../entities';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private serviceProviders:ProvidersService, private router:Router) { }

  /*
  public users:Avatar[]=[];*/
  providers:any;
  ngOnInit(): void {

    this.refreshListProviders();
   /* this.serviceProviders.listProviders().subscribe(
      response=>{
        this.providers = response;
      }
    );*/
   /* this.providers = this.serviceProviders.afficherProviders();

    this.serviceProviders.getUsers().subscribe(
      data =>{
        console.log(data);
       this.users = (<Avatar[]>data);
       console.log(this.users);
      }
    );*/
  }

  deleteProvider(myObj:any){
this.serviceProviders.deleteProvider(myObj).subscribe(
  response=>{
   this.refreshListProviders();
  }
);
  }
  refreshListProviders(){
    this.serviceProviders.listProviders().subscribe(
      response=>{
        console.log(response);
        this.providers = response;
      }
    );
  }

updateProvider(myObj:any){
  this.router.navigate(['updateProvider'+ '/' +myObj['id']]);
}

}
