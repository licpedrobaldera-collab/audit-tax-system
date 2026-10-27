export default function Matriz(){
 return <div style={{padding:20}}>
 <h1>MATRIZ MAESTRA ADMIN - BHD 08694150021</h1>
 <div style={{background:'#f0f9ff',padding:15,borderRadius:8}}><b>BALANCE OCT 2026:</b> Cobrado $15,000 (100x$150) | Pagado $3,600 (80x$45) | Por Pagar $900 | NETO BHD $10,500 | NY $3,800 FL $2,200 <button>Exportar Excel</button> <button>PDF</button></div>
 <h3>MATRIZ CLIENTES</h3><table border={1} cellPadding={5} style={{width:'100%',fontSize:12,background:'white'}}><tr><th>Caso</th><th>Cliente</th><th>Estado</th><th>Email</th><th>Cobrado</th><th>CPA</th><th>Status</th></tr><tr><td>CASO-00123</td><td>Juan Perez</td><td>NY</td><td>juan@email.com</td><td>$150</td><td>CPA-NY-12345</td><td>APROBADA</td></tr></table>
 <h3>MATRIZ FIRMAS + CONTACTOS</h3><table border={1} cellPadding={5} style={{width:'100%',fontSize:12,background:'white'}}><tr><th>CPA</th><th>Firma</th><th>Estado</th><th>Email/WhatsApp</th><th>Banco</th><th>Por Pagar</th><th>Acción</th></tr><tr><td>CPA-NY-12345</td><td>Pedro Baldera</td><td>NY</td><td>pedro@email.com / +1-917</td><td>Chase ****1234</td><td>$135</td><td><button>PAGAR ONLINE</button> <button>Contactar</button></td></tr></table>
 <h3>PAGOS HISTORIAL /PAYOUTS/2024/CPA-NY-12345/</h3>
 </div>
}
