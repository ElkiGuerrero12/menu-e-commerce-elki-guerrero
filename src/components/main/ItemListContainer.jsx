import ItemCount from './ItemCount';
import ItemList from './ItemList';


import './ItemListContainer.css'


function ItemListContainer() {
    return(
        <div className="main">
            <h1>Los mejores productos naturales</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora hic, ullam molestias ut delectus sed! Nemo odit necessitatibus 
                reiciendis odio quis omnis autem nostrum eveniet ipsa. Consectetur illo sunt eveniet.</p>
                
                <ItemList />  
                
        </div>

        

        
        
    );

}

export default ItemListContainer;