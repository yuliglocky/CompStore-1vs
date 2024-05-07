import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Producto } from '../common/modules/users.models';
import {
  Firestore,
  collectionData, collection,
  doc, docData, getDoc, setDoc, updateDoc, deleteDoc,
  DocumentReference, query, where
  
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor() { }
}
