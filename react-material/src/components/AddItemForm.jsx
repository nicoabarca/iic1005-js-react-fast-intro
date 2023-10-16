import React, { useState } from "react";

// Componente AddItemForm.
// Se encarga de manejar el input de texto para agregar un nuevo To-Do
// Recibe como property la functión addItem, que agrega un nuevo To-Do a la lista
const AddItemForm = ({ addItem }) => {

    // item = string actual del nombre del nuevo To-Do a agregar
    // setItem = actualiza el valor de item
    const [item, setItem] = useState("");

    // función que maneja el submit del form que tiene como contenido el nuevo nombre del To-Do
    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.trim() !== "") {
            addItem(item);
            setItem("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter a new item"
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
