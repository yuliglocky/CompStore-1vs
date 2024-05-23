import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData, 
  collection,
  doc, 
  docData, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  DocumentReference, 
  query, 
  where
  
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../common/modules/users.models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  constructor() {
  }

  getCollectionChanges<tipo>(path: string) {
    const itemCollection = collection(this.firestore, path);
    return collectionData(itemCollection,  { idField: 'id' }) as Observable<tipo[]>;
  }

  getProductoDetail(id: string): Observable<Producto> {
  const productoDoc = doc(this.firestore, 'productos', id);
  return docData(productoDoc) as Observable<Producto>;
  }

  getProductoCategory(codigo: string): Observable<Producto[]> {
    const q = query(collection(this.firestore, 'productos'), where('codigo', '==', codigo));
    return collectionData(q, { idField: 'id' }) as Observable<Producto[]>;
  }


  searchProductos(term: string, codigo: string): Observable<Producto[]> {
    const q = query(
      collection(this.firestore, 'productos'),
      where('nombre', '>=', term),
      where('nombre', '<=', term + '\uf8ff'),
      where('codigo', '==', codigo)
    );
    return collectionData(q, { idField: 'id' }) as Observable<Producto[]>;
  }
  
}