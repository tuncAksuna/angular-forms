import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpRequest: HttpClient) { }

  private url: string = 'https://jsonplaceholder.typicode.com/users?username='

  getUsers(userName: string): Observable<any> {
    return this.httpRequest.get(this.url + userName)
  }
}
