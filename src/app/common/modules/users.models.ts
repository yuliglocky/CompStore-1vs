export interface Producto {
    id: string;
    codigo: string;
    detalles: string;
    nombre: string;
    precio: number;
    imagenURL: string;
    isDeleted?: boolean;
    quantity?: number; 
  }

