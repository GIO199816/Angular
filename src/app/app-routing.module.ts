import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { InnerComponent } from './inner/inner.component';



const routes: Routes = [
  {path: "", component: HomeComponent,},
  {path: "inner", component: InnerComponent },
  {path: "episode", component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
