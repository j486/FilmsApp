import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaResponse } from '../interface/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  api_key: string = "c4991cc22cf76a1ed2a813db5401f25e";
  apiUrl = "https://api.themoviedb.org/3"

get httpParams() {
  return new HttpParams()
  .set("api_key", this.api_key)
  .set("language", "es")
}

buscarPeliculasPopulares(): Observable <PeliculaResponse> {
    const url = `${this.apiUrl}/discover/movie`
    return this.http.get<PeliculaResponse>(url,{params: this.httpParams});
}

buscarPeliculasEnCarteleraHoy(): Observable <PeliculaResponse> {
  const url = `${this.apiUrl}/movie/now_playing`
  return this.http.get<PeliculaResponse>(url,{params: this.httpParams});
}

buscarPeliculasProximas(): Observable <PeliculaResponse> {
  const url = `${this.apiUrl}/movie/upcoming`
  return this.http.get<PeliculaResponse>(url,{params: this.httpParams});
}

buscarPeliculasMasValoradas(): Observable <PeliculaResponse> {
  const url = `${this.apiUrl}/movie/top_rated`
  return this.http.get<PeliculaResponse>(url,{params: this.httpParams});
}

buscarPeliculaPorNombre(pelicula: string): Observable <PeliculaResponse> {
  const url = `${this.apiUrl}/search/movie`
  const httpParams = new HttpParams()
  .set("api_key", this.api_key)
  .set("language", "es")
  .set("query", pelicula)
  
  return this.http.get<PeliculaResponse>(url,{params: httpParams});
}

}
