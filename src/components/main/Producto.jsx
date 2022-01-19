import react from "react";
import ItemCount from "./ItemCount"

function Producto({item}){

   

    return(
        <div>          
            <ItemCount maximo = {item.Stock} />
        </div>
    )

}

export default Producto;