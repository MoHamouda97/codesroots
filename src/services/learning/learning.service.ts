import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  constructor(private http: HttpClient) { }

  getLessons () {
    return this.http.get(`${environment.URLSite}posts/viewall.json`);
  }
  
  getRelatedLessons (name) {
    return this.http.get(`${environment.URLSite}posts/viewpost/${name}.json`);
  }  
}
