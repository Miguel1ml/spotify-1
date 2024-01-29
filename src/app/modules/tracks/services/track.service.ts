import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
/** En el mundo de angular a los valores que van a ser observable se les suele
 * colocar un símbolo de $ al final 
 * Con esto [] les dice que se inicie como un array vacío 
 */
  private readonly URL = environment.api
  constructor(private http: HttpClient) { 

  }

  /**
   * 
   * @returns Devolver todas las canciones! Buenas!
   */

  private skipById(listTracks: TrackModel[], id:number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  } 

  getAllTracks$():Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
    /** Los pipe pueden hacer filtros de operadores */
  }
  /**
   * 
   * @returns Devolver canciones random
   * 
   */

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 0))
      // ,
      // map((dataRevertida) => {
      //   return dataRevertida.filter((track: TrackModel) => track._id != 1)
      // })
    )
   
  }
}
