import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { response } from 'express';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tracks-page',
    standalone: true,
    templateUrl: './tracks-page.component.html',
    styleUrl: './tracks-page.component.css',
    imports: [SectionGenericComponent,HeaderUserComponent]
})
export class TracksPageComponent implements OnInit, OnDestroy {

tracksTrending: Array<TrackModel> = []
tracksRandom: Array<TrackModel> = []

listObservers$: Array<Subscription> = []

constructor(private trackService: TrackService) { }

ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
        .subscribe(response => {
            this.tracksTrending = response
            this.tracksRandom = response
            console.log('Canciones trending ---→', response);
        })
    
    const observer2$ = this.trackService.dataTracksRandom$
        .subscribe(response => {
            this.tracksRandom = [...this.tracksRandom, ...response]
            console.log('Cancion random entrando....🖲️🖲️🖲️', response);
        })

    this.listObservers$ = [observer1$, observer2$]
 }

 ngOnDestroy(): void {
     this.listObservers$.forEach(u => u.unsubscribe())
 }

}
