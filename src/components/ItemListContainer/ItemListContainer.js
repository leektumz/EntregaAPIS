import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
const [items, setItems] = useState([]);


  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      //Ver que pasa si ponen el setItems(["Pera", "Manzana", "Mango", "Uva"])
      setTimeout(() => {
        todoBien(["Pera", "Manzana", "Mango", "Uva"]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  },[]);





  return (<div>
    <h1>Contenedor</h1>
    <ItemList items={items}/>
  </div>)
};

export default ItemListContainer;
