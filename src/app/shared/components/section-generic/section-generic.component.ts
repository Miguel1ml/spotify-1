import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CommonModule,CardPlayerComponent],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

  constructor() {}

  ngOnInit(): void {

  }

}
