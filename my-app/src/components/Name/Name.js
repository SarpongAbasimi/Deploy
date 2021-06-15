import React from 'react';


export const Name = ({dataprop})=> {
    return <div>
        <h1>La mia storia 🎬</h1>
        <p><span>Name:</span> {dataprop.name} 👑</p>
        <p><span>Country:</span> {dataprop.country} 🇬🇭</p>
        <p><span>Job: </span>{dataprop.occupation} 👨🏿‍💻</p>
        <a href={dataprop.Youtube}><span>Youtube</span></a>
        <hr/>
        <h1>Companies.</h1>
        {dataprop.previousCompany && dataprop.previousCompany.map((eachCompany,id) => {
             return(<li key={id}>{eachCompany}</li>)
         })}
        </div>
}