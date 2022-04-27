import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiprova from '../services/apiprova'

const Tabela = () => {
  const [Artworks, settabelas] = useState([])

  useEffect(() => {
     //const promessa = apiFilmes.get('movie/popular')
     apiprova.get('tv/on_the_air?language=pt-BR').then(resultado =>{
      
      settabelas(resultado.data) 
     })
    }, [])
  return (
    <div>
      <h2>Obras de Arte</h2>
      <Table>
      <thead>
    <tr>
      <th>Detalhar</th>
      <th>Titulo</th>
      <th>Autor</th>
      <th>Categoria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>Untitled</td>
      <td>Andy Warhol</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba mais</Button>{' '}</td>
      <td>Men/Many</td>
      <td>Joan Waltermath</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba mais</Button>{' '}</td>
      <td>Rocket Sam in - Tis the Seanson of Giving on Planet X-38"</td>
      <td>Chris Ware</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>Rocket Sam in - Tis the Seanson of Giving on Planet X-38"</td>
      <td>Chris Ware</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>UNTITLED(Bob)</td>
      <td>Kevin Wolff</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>Untitled</td>
      <td>Inez Nathaniel Walker</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>The Interior of the Palm Houde on the Pfaueninsel Near Potsdam</td>
      <td>Carl Blechen</td>
      <td>Painting and Sculpture</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>Anti-SlaveryPicnic at Weymouth Landing, Massachuetts</td>
      <td>Susan TOrrey Merritt</td>
      <td>Prints and Drawings</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>The Continence of Scipio</td>
      <td>Sebastiano Ricci</td>
      <td>Painting and Sculpture</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>The Madonna with the Seven Founders of the Servite Order</td>
      <td>Agostino Masucci</td>
      <td>Painting and Sculpture</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{' '}</td>
      <td>Vlakplaas: 2 June 1999 (drive-by shooting)</td>
      <td>Jo Ractliffe</td>
      <td>PPhotography and Media</td>
    </tr>
    <tr>
      <td><Button variant="secondary">Saiba Mais</Button>{''}</td>
      <td>Entrance to Lategan´s Truck Inn, In the of Aids,laingsburg,western Cape, 14 November 2004</td>
      <td>David Goldblatt</td>
      <td>Photography and Media</td>
    </tr>
  </tbody>
      <Row>
      {Artworks.map(item => (
        <Col >
        
        </Col>
      ))}
      </Row>
      </Table>
    </div>
  )
}

export default Tabela