import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../interface/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  api_key: string = "c4991cc22cf76a1ed2a813db5401f25e";
  apiUrl = "https://api.themoviedb.org/3/"

  get httpParams() {
    return new HttpParams()
      .set("api_key", this.api_key)
      .set("language", "es")
  }

  buscarSeriePorNombre(serie: string): Observable<SerieResponse> {
    const url = `${this.apiUrl}/search/tv`
    const httpParams = new HttpParams()
      .set("api_key", this.api_key)
      .set("language", "es")
      .set("query", serie)
    return this.http.get<SerieResponse>(url, { params: httpParams });
  }

  buscarSeriesPopulares(): Observable<SerieResponse> {
    const url = `${this.apiUrl}/tv/popular`
    return this.http.get<SerieResponse>(url, { params: this.httpParams });
  }

  buscarSeriesEmitenHoy(): Observable<SerieResponse> {
    const url = `${this.apiUrl}/tv/airing_today`
    return this.http.get<SerieResponse>(url, { params: this.httpParams });
  }

  buscarSeriesEmitiendo(): Observable<SerieResponse> {
    const url = `${this.apiUrl}/tv/on_the_air`
    return this.http.get<SerieResponse>(url, { params: this.httpParams });
  }

  buscarSeriesMasValoradas(): Observable<SerieResponse> {
    const url = `${this.apiUrl}/tv/top_rated`
    return this.http.get<SerieResponse>(url, { params: this.httpParams });
  }

}
