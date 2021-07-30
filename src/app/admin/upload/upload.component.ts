import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(
    public firestore: AngularFirestore,
    public router: Router,
    public dialogRef: MatDialogRef<UploadComponent>
  ) { }

  ngOnInit(): void {
  }
  playlist: any = {};
  tgl = new Date().getTime().toString();
  upload(){
    console.log(this.playlist)
    this.firestore.collection('Lagu').doc(this.tgl).set(this.playlist).then(res => {
      this.dialogRef.close(res);
      // this.router.navigate(['/home/subplaylist']);
    }).catch(err => {
      alert("Gagal Menambahkan Lagu");
      this.dialogRef.close(err);
    })
  }
}
