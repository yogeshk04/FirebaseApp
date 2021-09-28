import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from '../models/appuser';

// appUser$: Observable<AppUser>;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore
  ) {
    // this.appUser$
  }
}
