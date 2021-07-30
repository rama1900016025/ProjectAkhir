import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-subplaylist',
  templateUrl: './subplaylist.component.html',
  styleUrls: ['./subplaylist.component.scss']
})
export class SubplaylistComponent implements OnInit {
  song: any = [];
  constructor(
    public dialog: MatDialog,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getSong();
  }
  getSong() {
    this.firestore.collection('Lagu').valueChanges().subscribe(res =>{
      this.song = res
    })
  }
  upload(){
    const dialogRef = this.dialog.open(UploadComponent,{
      width: '550px',
    });
  }
}
