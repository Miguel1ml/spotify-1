import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {
/** En el mundo de angular a los valores que van a ser observable se les suele
 * colocar un símbolo de $ al final 
 * Con esto [] les dice que se inicie como un array vacío 
 */
  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() { 
    const { data }: any = (dataRaw as any).default;

    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id:9,
        name:'Leve',
        album:'Cartel de Santa',
        url:'http://',
        cover:'../assets/images/Leve.jpeg'
      }
      
      setTimeout(() => {
       observer.next([trackExample])
      }, 3500)
    /** 3500 son 3.5 segundos */
    })
    
  }
}
