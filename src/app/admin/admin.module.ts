import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/style/material/material';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SubplaylistComponent } from './subplaylist/subplaylist.component';

const routes : Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path:'playlist',
        component: PlaylistComponent
      },
      {
        path:'subplaylist',
        component: SubplaylistComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    PlaylistComponent,
    SubplaylistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule
  ]
})
export class AdminModule { }
