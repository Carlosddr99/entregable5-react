
import React, { useEffect, useState } from "react";
import styles from './Carrito.module.css';

export default function Carrito(){

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [descuento, setDecuento] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([{id:1, nombre: 'Agua', precio: 2},
                                                {id:2, nombre: 'Coca cola', precio: 3},
                                                {id:3, nombre: 'Red Bull', precio: 3.5}]);
    const codigo = 'AVE10';

    const inputCodigo = React.useRef(null);

    useEffect(() =>{
        const carro = JSON.parse(localStorage.getItem('carrito'));
        const productos = JSON.parse(localStorage.getItem('products'));

        if(carro){
            setCarrito(carro);
        }
        if(productos){
            setProducts(productos);
        }
    }, [])

    useEffect(() =>{
            localStorage.setItem('carrito', JSON.stringify(carrito));
            localStorage.setItem('products', JSON.stringify(products));

    }, [carrito, products])


    function eliminarProducto(item){
        setProducts(valores => [...valores, item]);
        setCarrito(carrito.filter(producto => producto !== item));
        setTotal(total - item.precio);
    }
    
    function addProducto(item){
        setCarrito(valores => [...valores, item]);
        setProducts(products.filter(producto => producto !== item));
        setTotal(total + item.precio);

    }

    function canjearProducto(){
        let inputText = inputCodigo.current.value;
        if(inputText === ''){
            setError(false);
            return;
        }
        if(inputText === codigo){
            setDecuento(true);
            setError(false);
        }else{
            setDecuento(false);
            setError(true);
        }  


    }

    return(
        <div className={styles.carrito}>
            <div>
                <h1 className={styles.seccion}>Carrito</h1>
                {carrito.map((item)=>(
                    <div className={styles.cajaProducto}>
                        <span>{item.nombre}</span>
                        <span>{item.precio}</span>
                        <button onClick={()=>eliminarProducto(item)}>Eliminar Producto</button>
                    </div>
                    
                ))}
                <span>Código de descuento:</span><input ref={inputCodigo} type="text"></input> 
                <button onClick={canjearProducto}>Canjear Código</button>
                <span><h3 >Precio final =  {error? "Código erroneo" : descuento? total* 0.9 : total}</h3></span>
                
            </div>

            <div>
                <h2 className={styles.seccion}>Productos Disponibles</h2>
                
                    { products.map((item)=>(
                    <div className={styles.cajaProducto}>
                        <span>Producto:{item.nombre}</span>
                        <span>Precio:{item.precio}</span>
                        <button className={styles.cajaBoton} onClick={()=>addProducto(item)}>Añadir Producto</button>
                    </div>
                ))}
                
            </div>
        </div>
    )
}