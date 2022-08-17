import { Component } from '@angular/core';
import { Etudiant } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ams';


  nom="mohamed";
  prenom ="zorgani";
  tab:string[] =['Mohamed','Zorgani','Jouri'] ;
  etd : Etudiant []= [
    {nom:"Mohamed",email:"mohamed@gmail",age:2},
    {nom:"Sihem",email:"sihem@gmail",age:32},
    {nom:"Jouri",email:"jouri@gmail",age:32}];
    e : Etudiant = {nom:"zorgani",email:"zorgani@gmail.com",age:90};


}
