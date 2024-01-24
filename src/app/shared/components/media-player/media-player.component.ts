import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; /**Esto es la programación reactiva */

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover:TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/tracks.mp3',
    _id: 1
  }

  listObservers$:Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción....', response);
      }
    )

    
    this.listObservers$ = [observer1$]

  }
/** El OnInit es el primero que se ejecuta y OnDestroy es el último
 * antes de destruir el componente
 */
  ngOnDestroy(): void {
   this.listObservers$.forEach(u => u.unsubscribe)
   console.log('🖲️🖲️🖲️🖲️🖲️🖲️🖲️ BOOOOOM') 
  }

}
