import React from 'react'
import {useState, useEffect} from "react"
import { getProducts } from '../../data/data.js'
import {useParams} from "react-router-dom"
import ItemDetail from './ItemDetail.jsx'
import Loading from '../Loading/Loading.jsx'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()

    useEffect(() =>{
        setLoading(true)

        getProducts()
            .then((data) =>{
                const findProduct = data.find((product) => product.id === idProduct)
                setProduct(findProduct)
            })
            .finally(() => setLoading(false))
    }, [idProduct])

  return (
    <>
        {
            loading === true ? <Loading/> : <ItemDetail product={product}/>
        }
    </>
  )
}

export default ItemDetailContainer
