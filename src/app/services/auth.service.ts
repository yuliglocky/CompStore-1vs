import { Injectable } from '@angular/core';
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Firestore, getFirestore, doc, getDoc } from 'firebase/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private db = getFirestore();

  constructor() {}

  getCurrentUser(): Observable<any> {
    const auth: Auth = getAuth();
    return new Observable((observer) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDocRef = doc(this.db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            observer.next(userDoc.data());
          } else {
            observer.next(null);
          }
        } else {
          observer.next(null);
        }
      });
    });
  }
}
