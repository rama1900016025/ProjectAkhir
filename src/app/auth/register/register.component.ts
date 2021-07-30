import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  confhide = true;
  user: any = {};

  constructor(
    public router: Router,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {

  }

  loading: boolean = false;

  register() {
    this.loading = true;
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((result: any)=>{
    alert("Register Berhasil");
    }).catch(error=>{
      alert("Register Gagal");
      this.loading = false;
     console.log(error.massage);
    }
    )
  }
}
