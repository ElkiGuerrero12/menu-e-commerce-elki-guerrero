import react, {useState} from "react";
import Producto from "./Producto";



function ListaDeProductos(){

    const [arrayDeProductos, setArrayDeProductos] = useState([
        {nombre: 'Maca', Stock: 5},     
        
        
    
    ]

    ) 


    return(

        <div>
            {arrayDeProductos.map(item => <Producto item ={item}/> )}
        </div>

    )
}

export default ListaDeProductos;