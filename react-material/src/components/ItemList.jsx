import React from "react";

// Componente ItemList. 
// Muestra una lista de items en base a la información que recibe como property -> { items }.
// Las "properties" permiten pasar información entre componentes, en este caso el componente App
// pasa al componente ItemList una lista de elementos para que este lo muestre.

const ItemList = ({ items }) => {
    return (
        <ul>
            {/*-- Cada item de la lista items es "mapeado" a un elemento <li></li>*/}
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ItemList;
