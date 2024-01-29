import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tracks-page',
    standalone: true,
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css'],
    imports: [SectionGenericComponent,HeaderUserComponent]
})
export class TracksPageComponent implements OnInit, OnDestroy {

tracksTrending: Array<TrackModel> = []
tracksRandom: Array<TrackModel> = []

listObservers$: Array<Subscription> = []

constructor(private trackService: TrackService) { }

ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => {
        this.tracksTrending = response
    })

    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
    })
}

 ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe());
 }

}
