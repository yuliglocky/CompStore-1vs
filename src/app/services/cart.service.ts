import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuth  } from 'firebase/auth';
import { Producto } from '../common/modules/users.models';
import {
  Firestore,
  collectionData, collection,
  doc, docData, getDoc, setDoc, updateDoc, deleteDoc,
  DocumentReference, query, where, addDoc
  
} from '@angular/fire/firestore';
import { getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private firestore: Firestore = inject(Firestore);
  constructor() { 
  }

  async addProductsCar(producto: Producto): Promise<void> {
    const auth = getAuth();
    if (auth.currentUser) {
      const cartCollectionRef = collection(this.firestore, `users/${auth.currentUser.uid}/cars`);
      const q = query(cartCollectionRef, where('nombre', '==', producto.nombre));
  
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        // Producto ya existe, actualizamos la cantidad
        const docSnapshot = querySnapshot.docs[0];
        const currentQuantity = (docSnapshot.data() as Producto).quantity || 0;
        const newQuantity = Math.min(currentQuantity + 1, 1); // Limitar la cantidad a 1
        await updateDoc(docSnapshot.ref, { quantity: newQuantity, isDeleted: false });
      } else {
        // Producto no existe, añadimos con cantidad inicial de 1
        const productWithStatus = { ...producto, quantity: 1, isDeleted: false };
        await addDoc(cartCollectionRef, productWithStatus);
      }
    } else {
      throw new Error('Usuario no autenticado');
    }
  }
  
  ProductsCars(): Observable<Producto[]> {
    return new Observable<Producto[]>((observer) => {
      const auth = getAuth();
      if (auth.currentUser) {
        const cartCollectionRef = collection(this.firestore, `users/${auth.currentUser.uid}/cars`);
        collectionData(cartCollectionRef, { idField: 'id' }).subscribe({
          next: (data) => {
            const productos: Producto[] = data.map((doc: any) => ({
              id: doc.id,
              codigo: doc.codigo,
              detalles: doc.detalles,
              nombre: doc.nombre,
              precio: doc.precio,
              imagenURL: doc.imagenURL,
              isDeleted: doc.isDeleted,
              quantity: Math.max(doc.quantity || 1, 1) // Asegurar cantidad mínima de 1
            }));
            observer.next(productos);
          },
          error: (error) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          }
        });
      } else {
        observer.error('Usuario no autenticado');
      }
    });
  }
  
  deleteProductFromCart(productId: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      if (auth.currentUser) {
        const productDocRef = doc(this.firestore, `users/${auth.currentUser.uid}/cars/${productId}`);
        getDoc(productDocRef).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            updateDoc(productDocRef, { isDeleted: true })
              .then(() => resolve())
              .catch(error => reject(error));
          } else {
            reject('El documento no existe.');
          }
        }).catch(error => reject(error));
      } else {
        reject('Usuario no autenticado');
      }
    });
  }
}