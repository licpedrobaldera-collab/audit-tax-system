'use client'
import {useState} from 'react'
export default function Login(){
 const [id,setId]=useState(''); const [clave,setClave]=useState('')
 return <div style={{padding:20,maxWidth:400,margin:'50px auto',background:'white',borderRadius:12}}>
 <h2>LOGIN - Email o Tel o ID + Clave</h2>
 <input placeholder='Email / Tel / Cédula / ID' value={id} onChange={e=>setId(e.target.value)} style={{padding:12,width:'100%',margin:'10px 0'}}/>
 <input type='password' placeholder='Clave' value={clave} onChange={e=>setClave(e.target.value)} style={{padding:12,width:'100%',margin:'10px 0'}}/>
 <button style={{padding:12,background:'black',color:'white',width:'100%',borderRadius:8}}>Entrar</button>
 <p><a href='/registro'>Crear cuenta</a> | Olvidé clave (Email/SMS 15min)</p>
 <p style={{fontSize:11}}>Roles: CLIENTE/CONTADOR/FIRMA/ADMIN/DEV - Clave cambiable en Perfil</p>
 </div>
}
