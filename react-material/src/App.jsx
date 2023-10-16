import React, { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

const App = () => {
  // https://react.dev/reference/react
  // Variable con un hook para manejar una variable estado del componente
  // items = valor actual que tiene la variable items
  // setItems = fución que actualiza el valor de la variable items
  const [items, setItems] = useState([]);

  // Función que actualiza el estado de items mediante setItems
  const addItem = (item) => {
    setItems([...items, item]);
  };

  // Contenido que retorna el componente App
  return (
    <div className="app">
      <Header />
      <AddItemForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
};

export default App;
