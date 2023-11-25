'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import style from './style.module.scss'

function ReviewsId({params}){
    const onToDetail = ()=>{
        router.push('/products')
    }
    const router = useRouter()
    return <div className={style.contain}>
        Reviews detail page of id {params.slug} and review page id {params.idReview}
        <button onClick={onToDetail}>Click to products page</button>
    </div>
}
export default ReviewsId