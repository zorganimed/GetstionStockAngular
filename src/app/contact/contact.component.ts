import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
source:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png";
show:boolean = true;
  constructor( private userService:UsersService) { }

  ngOnInit(): void {
this.userService.info();
  }

  public display(){
    this.show = !this.show;
  }

}
