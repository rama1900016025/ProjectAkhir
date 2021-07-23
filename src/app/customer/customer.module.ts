import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdukComponent } from './produk/produk.component';
import { materialModule } from 'src/style/material/material';

const routes : Routes = [
  {
    path:'produk',
    component: ProdukComponent
  },
  {
    path:'',
    component: ProdukComponent
  }
]

@NgModule({
  declarations: [
    ProdukComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    materialModule
  ]
})
export class CustomerModule { }
