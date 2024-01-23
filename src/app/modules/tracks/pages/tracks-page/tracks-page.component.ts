import { Component } from '@angular/core';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
    selector: 'app-tracks-page',
    standalone: true,
    templateUrl: './tracks-page.component.html',
    styleUrl: './tracks-page.component.css',
    imports: [SectionGenericComponent,HeaderUserComponent]
})
export class TracksPageComponent {
    mockTracksList: Array<TrackModel> = [
 ]
 constructor() { }

 ngOnInit(): void {
    const { data }:any = (dataRaw as any).default 
    this.mockTracksList = data
 }

}
