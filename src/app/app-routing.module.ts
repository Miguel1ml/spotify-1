import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuardService } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


export const routes: Routes = [
    {
      path:'auth',
      loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path:'',
      component: HomePageComponent,
      loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule),
      canActivate: [SessionGuardService] 
      // Puede contener varios guardianes
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }