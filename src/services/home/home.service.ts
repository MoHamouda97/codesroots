import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getSlides () {
    return this.http.get(`${environment.URLSite}sliders.json`);
  }

  getWorks () {
    return this.http.get(`${environment.URLSite}ourworks/worklist.json`);
  }  
}
