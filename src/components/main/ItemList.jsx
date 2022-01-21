import react, {useState, useEffect} from "react";
import Producto from "./Item";
import './Item.css'






function ListaDeProductos(){

    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    
    const productosEnStock = new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve([
        {id: 1 , nombre: 'Liber', Stock: 5 , descripcion: "Antiinflamatorio y diurético", precio: 69.90, img:'./img/Liber.jpg'}, 
        {id: 2 , nombre: 'Algas', Stock: 4, descripcion:"Adelgazante natural" , precio:49.90, img:'./img/Algas.jpg' }, 
        {id: 3 , nombre: "Cardo Mariano", Stock: 4, descripcion:"Suplemento natural" , precio:59.90, img:'./img/Cardo-Mariano.jpg' }, 
        {id: 4 , nombre: 'Noni', Stock: 5, descripcion:"Suplemento natural" , precio:49.90, img:'./img/Noni.jpg' }, 
        {id: 5 , nombre: 'Caigua', Stock: 3, descripcion:"Adelgazante natural" , precio:49.90, img:'./img/Caigua.jpg' }, 
        {id: 6 , nombre: 'Ginseng', Stock: 8, descripcion:"Multivitamíco" , precio:49.90, img:'./img/Ginseng.jpg' }, 
        {id: 7 , nombre: "Ginko Biloba", Stock: 6, descripcion:"Suplemento natural" , precio:49.90, img:'./img/Ginko-biloba.jpg' }, 
        {id: 8 , nombre: 'Graviola', Stock: 4, descripcion:"Antiinflamatorio natural", precio:49.90, img:'./img/Graviola.jpg' },
            ])
        }, 2000)
    });

    useEffect(() =>{
        productosEnStock
        .then(res => {
            setLlegoPromesa(true);
            setArrayDeProductos(res)
        })

        .catch(err => {
            setLlegoPromesa(true);
            console.log(err)
        });
    })


    return(

        <>
        {(llegoPromesa) ?

        <div className="listaProductos">
            
            {arrayDeProductos.map(item =>{
                return <Producto item ={item} /> 
            } ) }           
        </div>
        :
        <>Loading...</>
    }
        </>
    )
    
        }

export default ListaDeProductos;