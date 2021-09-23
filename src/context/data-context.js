import React, { useState, useEffect, createContext, useContext } from 'react'
import { db } from '../.firebase'
import { addDoc, deleteDoc, collection, onSnapshot, serverTimestamp, doc } from 'firebase/firestore'

const products_collection = 'products'
const categories_collection = 'categories'

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  //   CRUD Products
  const addProduct = async (_product) => {
    if (!_product) return

    setLoading(true)
    await addDoc(collection(db, products_collection), {
      ..._product,
      created_at: serverTimestamp(),
    })
    setLoading(false)
  }
  const deleteProduct = async (_id) => {
    if (!_id) return

    setLoading(true)
    await deleteDoc(doc(db, products_collection, _id))
    setLoading(false)
  }
  const getProducts = () => {
    setLoading(true)
    onSnapshot(collection(db, products_collection), (snapshot) => {
      const _products = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          docId: doc.id,
          ...doc.data(),
        }
      })
      setProducts(_products)
    })
    setLoading(false)
  }

  const getProduct = (_id) => {}

  //   CRUD Categories
  const addCategory = async (_category) => {
    if (!_category) return

    setLoading(true)
    await addDoc(collection(db, categories_collection), {
      ..._category,
      created_at: serverTimestamp(),
    })
    setLoading(false)
  }
  const deleteCategory = async (_id) => {
    if (!_id) return

    setLoading(true)
    await deleteDoc(doc(db, categories_collection, _id))
    setLoading(false)
  }
  const getCategories = () => {
    setLoading(true)
    onSnapshot(collection(db, categories_collection), (snapshot) => {
      const _categories = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        }
      })
      setCategories(_categories)
    })
    setLoading(false)
  }

  //   get category and its products
  const getCategory = (_id) => {}

  useEffect(() => {
    const _products = getProducts()
    const _categories = getCategories()

    // clean up function
    return () => {
      _categories()
      _products()
    }
  }, [])

  const values = {
    addProduct,
    deleteProduct,
    getProducts,
    addCategory,
    deleteCategory,
    loading,
    products,
    categories,
  }
  return <DataContext.Provider value={values} children={children} />
}

const useDataContext = () => useContext(DataContext)

export { DataProvider, useDataContext }
