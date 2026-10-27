'use client'
import {useState} from 'react'
export default function Tax(){
 const [estado,setEstado]=useState('NY')
 return <div style={{padding:20,maxWidth:600,margin:'auto',background:'white',borderRadius:12}}>
 <h2>TAX $150 - {estado} - Expediente Histórico</h2>
 <select value={estado} onChange={e=>setEstado(e.target.value)} style={{padding:10,width:'100%'}}><option>NY</option><option>FL</option><option>NJ</option><option>TX</option><option>RD</option></select>
 <input placeholder='Nombre' style={{display:'block',margin:'10px 0',padding:12,width:'100%'}}/>
 <input placeholder='Email' style={{display:'block',margin:'10px 0',padding:12,width:'100%'}}/>
 <input type='file' multiple style={{margin:'10px 0'}}/>
 <p>Carpeta: /2024/{estado}/CASO-00123/ + 8 archivos soportes histórico</p>
 <button style={{padding:14,background:'#2563eb',color:'white',width:'100%',borderRadius:8,border:0}}>Pagar $150 - Genera Contrato + Asigna CPA Aleatorio {estado}</button>
 </div>
}
