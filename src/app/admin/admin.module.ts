import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/style/material/material';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SubplaylistComponent } from './subplaylist/subplaylist.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      {
        path:'upload',
        component: UploadComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    PlaylistComponent,
    SubplaylistComponent,
    UploadComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
