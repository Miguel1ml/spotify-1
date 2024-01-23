import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models'
import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule,OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{
  tracks: TrackModel[] = []
  optionSort:{property: string | null, order:string} = {property: null, order: 'asc'}
  constructor( )  { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data;
    
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order:order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }

}
