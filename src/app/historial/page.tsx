'use client'
import {useState} from 'react'
export default function Historial(){
 const [tab,setTab]=useState('REALIZADA')
 return <div style={{padding:20}}><h2>HISTORIAL POR ESTADO NY/FL/NJ/TX</h2><select style={{padding:10}}><option>NY (12/8/45)</option><option>FL</option><option>Todos</option></select><div style={{marginTop:10}}><button onClick={()=>setTab('REALIZADA')} style={{background:tab==='REALIZADA'?'black':'#ddd',color:tab==='REALIZADA'?'white':'black',padding:8,marginRight:5}}>REALIZADAS</button><button onClick={()=>setTab('EN_TRAMITE')} style={{background:tab==='EN_TRAMITE'?'black':'#ddd',padding:8,marginRight:5}}>EN TRÁMITE</button><button onClick={()=>setTab('APROBADA')} style={{background:tab==='APROBADA'?'black':'#ddd',padding:8}}>APROBADAS</button></div><p>Tab: {tab} - Casos /2024/NY/CASO-00123/ - Ver/Contactar CPA</p></div>
}
