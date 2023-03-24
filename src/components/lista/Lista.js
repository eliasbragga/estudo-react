import React, { useEffect, useState } from 'react'

export function Lista() {
    const listStyle = {
        display: 'flex',
        flexDirection: 'column',
        letterSpacing: '5px',
        lineHeight: '40px'
    }
    const [lista, setLista] = useState([
        {
            name:"Elias",
            old:24
        },
        {
            name:"Marina",
            old:27
        },
        {
            name:"Kaue",
            old:32
        },
        {
            name:"Gabriel",
            old: 5
        },
        {
            name:"Edivalda",
            old:51
        },
        {
            name:"Marcos",
            old:49
        },
    ])

    const [search, setSearch] = useState('')
    // const [filterList, setFilterList] = useState('')

    const filterList = search.length > 0 
    ? lista.filter(item => item.name.includes(search)) 
    : lista

    // useEffect(() =>{
       
    // }, [search])


    return (                                           
        <div>
            <input value={search} onChange={(item) => setSearch(item.target.value)} type="text" />

            <ul style={listStyle}>
                {
                    filterList.map((item, index) => {
                        return(
                            <li key={index}>{item.name}</li>
                        )
                    })
                }
            </ul>

            
        </div>
    )
}