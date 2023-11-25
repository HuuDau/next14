'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import style from './style.module.scss'

function ProductDetail({params}){
    const router = useRouter()
    const onToRevew = ()=>{
        router.push(`/products/${params.slug}/reviews`)
    }
    return <div className={style.contain}>
        detail page of id {params.slug}
        <button onClick={onToRevew}> CLick to Reviews page</button>
    </div>
}
export default ProductDetail