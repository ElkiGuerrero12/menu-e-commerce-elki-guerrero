import react from "react";
import ItemCount from "./ItemCount"

import './Item.css'

function Producto({item}){

   

    return(
        <div className="productos">
            <div className="carts">
                <div>
                <img src={item.img} />                  
                </div>
                <h2 className="title">{item.nombre}</h2>
                <p className="description">{item.descripcion}</p>
                <p className="precio-product">S/.<span>{item.precio}</span></p>
                
            </div>        
            <ItemCount maximo = {item.Stock} />
            
        </div>
    )

}

export default Producto;