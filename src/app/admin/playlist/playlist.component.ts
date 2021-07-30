import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  playlist = [
    {title:'Top Songs of The Week', x:'Top 10 Songs Global', img:'assets/top10.jpg'},
    {title:'The Weeknd', x:'Top Song of The Weeknd', img:'assets/theweeknd.jpg'}
  ]

}
