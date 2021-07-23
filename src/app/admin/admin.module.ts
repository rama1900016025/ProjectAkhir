import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/style/material/material';
import { ProdukComponent } from './produk/produk.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes : Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path:'produk',
        component: ProdukComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    ProdukComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule
  ]
})
export class AdminModule { }
