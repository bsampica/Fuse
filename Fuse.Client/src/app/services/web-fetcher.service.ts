import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    responseType: 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WebFetcherService {
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
      this.httpClient = httpClient;
  }

  public getGoogleHomePage() : Observable<any>
  {
      return this.httpClient.get('/client-api/webrequest', {responseType: 'text'});
  }
}
