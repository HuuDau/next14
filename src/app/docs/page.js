'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import css from './css.module.scss'
export default function Docs(){
    const router = useRouter()
    const onSegment = ()=>{
        const chuoi = 'pageNameRandomCustome'
        const chuoi2 = 'pageNameRandomCustome'
        router.push(`/docs/${chuoi}/chuoi2`)
    }
    return <div className={css.container}>Docs page
    <button onClick={onSegment}>Click to children all segment</button>
    </div>
}