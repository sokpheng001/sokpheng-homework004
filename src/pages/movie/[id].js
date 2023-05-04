import { useRouter } from 'next/router'
import { Button, Card,Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { BASE_URL,API_KEY, BASE_PATH, YOUTUBE } from '@/lib/index';
import { Cousine, Mouse_Memoirs } from 'next/font/google';
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage';

export default function Movie() {
    const route = useRouter();
    const[movie,setMovie] = useState({});
    const[key,setKey] = useState()
    useEffect(()=>{
      fetch(`${BASE_URL}movie/${route.query.id}/videos?api_key=${API_KEY}`)
      .then(e=>e.json()).then(e=>{
        setMovie(e);
        setKey(e.results[e.results.length-1].key)
      }).catch(err=>{
        console.log("Error: " + err)
      })
    },[])
  return (
    <Container className=''>
      <Button variant='dark' className='mt-4 mb-4' href='/movie'>Previous Page</Button>
      <Button type="button"
              className="btn btn-primary float-right mt-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" variant='dark'>Watch Trailer</Button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered modal-xl ">
                <div class="modal-content">
                  <iframe style={{height: 500}} src={YOUTUBE + key} frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
      <Card className='shadow mb-4'>
      <Card.Header style={{border:"none"}}>Movie Detail</Card.Header>
      <Card.Img variant="top" alt='thumbnail'
      src={route.query.image} 
      style={{height:"500px",objectFit:"cover"}}
      className='rounded-0'
      />
      <Card.Body>
        <Card.Title style={{textDecoration:"underline"}}>{route.query.title? route.query.title:"Unknown"}</Card.Title>
        <Card.Text>
          {
            route.query.overview? route.query.overview:"Unknown"
          }
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}
//${BASE_URL}movie/${id}/videos?api_key=${API_KEY}
