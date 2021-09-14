import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService {

  configUrl="http://localhost:3000/taecher"
  constructor(private http : HttpClient) { }


  getteacher () {
    return this.http.get(this.configUrl)
  }

  post (model) {
   return this.http.post(this.configUrl , model)
  }

  delete (id) {
    return this.http.delete(this.configUrl + `/${id}`)
  }

  put (model , id) {
    return this.http.put (this.configUrl  + `/${id}` , model)
  }
}
