'use client'

export default function Docs({params}){
    if(params.slug.length > 1){
       return params.slug.map((urlElement,index)=>{
            return <h1>Docs detaile page {urlElement} deep page {index}</h1>
        })
    }
    return <h1>DOcs page slug</h1>
}