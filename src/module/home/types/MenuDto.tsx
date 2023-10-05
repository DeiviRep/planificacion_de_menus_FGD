export interface Menus {
  id: number;
  nombre: string;
  descripcion: string;
  platos: Plato[];
}

export interface Plato {
  receta_id: number;
  porciones: number;
}

export interface Recetas {
  id: number;
  nombre: string;
  ingredientes: number[];
  instrucciones: string;
  foto: string;
}

//ddd
export interface MenuReadData {
  ingredientes: Ingrediente[];
  recetas: Recetas[];
  menus: Menus[];
  listas_de_compra: ListasDeCompra[];
}

export interface Ingrediente {
  id: number;
  nombre: string;
  foto: string;
  cantidad_disponible: number;
}

export interface ListasDeCompra {
  id: number;
  nombre: string;
  items: Item[];
}

export interface Item {
  ingrediente_id: number;
  cantidad: number;
}
