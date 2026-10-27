'use client'
import {useState} from 'react'
export default function Registro(){
 const [rol,setRol]=useState('CLIENTE')
 return <div style={{padding:20,maxWidth:500,margin:'auto',background:'white',borderRadius:12}}>
 <h2>REGISTRO POR ROL</h2>
 <select value={rol} onChange={e=>setRol(e.target.value)} style={{padding:10,width:'100%'}}><option>CLIENTE</option><option>CONTADOR</option><option>FIRMA</option><option>ADMIN</option><option>DEV</option></select>
 <input placeholder='Nombre completo' style={{padding:10,width:'100%',margin:'10px 0'}}/>
 <input placeholder='Email (opcional)' style={{padding:10,width:'100%',margin:'10px 0'}}/>
 <input placeholder='Teléfono (opcional)' style={{padding:10,width:'100%',margin:'10px 0'}}/>
 <input placeholder='ID / Cédula (opcional)' style={{padding:10,width:'100%',margin:'10px 0'}}/>
 <input type='password' placeholder='Clave min 8' style={{padding:10,width:'100%',margin:'10px 0'}}/>
 {rol==='CONTADOR' && <><input placeholder='Licencia CPA' style={{padding:10,width:'100%',margin:'5px 0'}}/><input placeholder='PTIN' style={{padding:10,width:'100%',margin:'5px 0'}}/><input placeholder='Banco comisión $45' style={{padding:10,width:'100%',margin:'5px 0'}}/><input placeholder='Número cuenta' style={{padding:10,width:'100%',margin:'5px 0'}}/><input placeholder='Routing/SWIFT' style={{padding:10,width:'100%',margin:'5px 0'}}/></>}
 <button style={{padding:12,background:'#16a34a',color:'white',width:'100%',borderRadius:8}}>Crear {rol} - Código 6 dígitos</button>
 </div>
}
