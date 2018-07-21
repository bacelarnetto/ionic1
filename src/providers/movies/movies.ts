import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';


@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getPopularMovies(){
    return new Promise((resolve, reject) => {
      this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=eff4a3d0649417c913e5e80f393f1c86")
      .subscribe(response=>{
        var data = response as any;
        resolve(data.results);
      }, error => {
        reject(error)
      });
    })
  }

  getMovie(id){
    var url = `https://api.themoviedb.org/3/movie/${id}?api_key=eff4a3d0649417c913e5e80f393f1c86`;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(response=>{
          var data = response as any;
          resolve(data);
        }, error => {
          reject(error)
        });
    })
  }

}
