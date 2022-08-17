import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avatar } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  /*providers : string[] = ["HP","DELL","LENOVO"];
  private users:any;
  private url= "https://jsonplaceholder.typicode.com/photos";
*/
  constructor(private http: HttpClient) {}

  listProviders() {
    return this.http.get(this.urlProviders + '/list');
  }

  createProvider(myForm: any) {
    this.provider = {
      name: myForm.value.providerName,
      email: myForm.value.providerEmail,
      adress: myForm.value.providerAdress,
    };
    return this.http.post(this.urlProviders + '/add', this.provider);
  }

  updateProvider(myObj: any) {
    return this.http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj: any) {
    return this.http.delete(this.urlProviders + '/' + myObj['id']);
  }

  getProvider(id: any) {
    return this.http.get(this.urlProviders + '/' + id);
  }

  /*public afficherProviders(){v
    return this.providers;
  }
  public getUsers(){
    return this.http.get(this.url);

  }*/
}
