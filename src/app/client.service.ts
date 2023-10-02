import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = '/api';

  constructor( private httpclient: HttpClient) { }

  logedClient(client: Client): Observable<any> {
    return this.httpclient.post(`http://localhost:8080/client/loginClient`,client);
  }

  createClient(client: Client): Observable<Object> {
    return this.httpclient.post(`http://localhost:8080/client/addClient`,client);
  }

  getClientByUsername(username: string): Observable<Client> {
    return this.httpclient.get<Client>(`http://localhost:8080/client/getClientsByUsername/${username}`);
  }

  updateProfilePicture(id: number, profilePictureUrl: string, profilePictureFile: File): Observable<any> {
    const formData = new FormData();
    if (profilePictureUrl) {
      formData.append('profilePictureUrl', profilePictureUrl);
    }
    if (profilePictureFile) {
      formData.append('profilePictureFile', profilePictureFile);
    }
    return this.httpclient.post(`${this.apiUrl}/users/${id}/profile-picture`, formData);
  }

}
