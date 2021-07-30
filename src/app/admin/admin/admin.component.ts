import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pilihan = [
    {title:'Home', link:'home' , icon:'home'},
    {title:'Playlist', link:'playlist', icon:'playlist_play'}
  ]

}
