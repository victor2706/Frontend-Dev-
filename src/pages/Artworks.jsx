import {React ,useEffect, useState } from 'react'
import {Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiprova from '../services/apiprova'


const Artworks = () => {

const [Artworks, setwork] = useState([])

useEffect(()=>{   
    const promessa = apiprova.get('/artworks/')
    promessa.then(resultado=>{
        setwork(resultado.data.data)
    })
}, [])



  return (
    <div>
        <h1>Obras de Arte</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Detalhes</th>
      <th>Título da Arte</th>
      <th>Autor do quadro</th>
      <th>Categoria</th>
    </tr>
  </thead>
{Artworks.map(item => (
  <tbody key={item.id}>
    <tr>
      <td><Link to={'/artworks/' + item.id} className=''>Saiba mais</Link></td>
      <td>{item.title}</td>
      <td>{item.artist_title}</td>
      <td>{item.department_title}</td>
    </tr>
  </tbody>
))}
</Table>
    </div>
  )
}

export default Artworks