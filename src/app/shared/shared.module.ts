import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe
    ],
  exports:[    
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent, 
    OrderListPipe
  ]
})
export class SharedModule { }
