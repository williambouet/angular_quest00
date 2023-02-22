import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaApi } from '../model/nasa-api';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<NasaApi>{
    return this.http.get<NasaApi>("https://api.nasa.gov/planetary/apod?api_key=eGDkSUMBz1iK0EjXrQFY5ERYxRJnv6RWEv2hUXvw");
  }
}

/* constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<string[]>{
    return this.http.get<string[]>("https://api.nasa.gov/planetary/apod?api_key=eGDkSUMBz1iK0EjXrQFY5ERYxRJnv6RWEv2hUXvw");
  }
} */