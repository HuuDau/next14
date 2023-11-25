'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import css from './css.module.scss'

function Products(){
    const router = useRouter()
    const onToDetail = ()=>{
        const id = Math.floor(Math.random() * 1250)
        router.push(`/products/${id}`)
    }
    return <div className={css.container}>
        Product page
        <button onClick={onToDetail}>Click to detail page</button>
    </div>
}
export default Products