import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';

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
    this.loadDataAll()
    this.loadDataRandom()
}

async loadDataAll(): Promise <any> {
    this.tracksTrending = await firstValueFrom(this.trackService.getAllTracks$());
    this.tracksRandom = await firstValueFrom(this.trackService.getAllRandom$());
//     try {
//     const dataRaw = await firstValueFrom(this.trackService.getAllTracks$());
//     console.log('🖲️🖲️🖲️', dataRaw);
// } catch (error) {
//     console.error('Error al cargar datos', error);
// }
}

loadDataRandom(): void {
    const randomTracksSub = this.trackService.getAllRandom$()
      .subscribe({
        next: (response: TrackModel[]) => {
          this.tracksRandom = response;
        }
      });
    this.listObservers$.push(randomTracksSub);
  }
  
 ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe());
 }

}
