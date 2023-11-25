'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import style from './style.module.scss'

function Reviews({params}){
    const router = useRouter()
    const onToDetail = ()=>{
        const id = Math.floor(Math.random() * 1250)
        router.push(`/products/${params.slug}/reviews/${id}`)
    }
    return <div className={style.contain}>
        Reviews detail page of id {params.slug}
        <button onClick={onToDetail}>Click to detail review</button>
    </div>
}
export default Reviews