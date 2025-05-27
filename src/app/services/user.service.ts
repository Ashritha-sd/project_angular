import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_url='http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }
  ngOnInit(){
    this.fetchUserData();
  }
  fetchUserData(){
    return this.httpClient.get(this.user_url);
  }
  addUser(user: any){
    return this.httpClient.post(this.user_url, user);
  }
  deleteUser(id:number)
  {
    return this.httpClient.delete(`${this.user_url}/${id}`);
  }
  updateUser(user:any)
  {
    return this.httpClient.put(`${this.user_url}/${user.id}`, user);
  }
}
