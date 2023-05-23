import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface unsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<unsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID D2KJ8Z-xaYNrem5U5Y13kAusGbCf11eopgTDzEUWVRU'
      }
    })
  }
}
