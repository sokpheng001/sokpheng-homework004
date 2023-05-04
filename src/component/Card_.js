import { Oooh_Baby } from 'next/font/google';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card_({title, description, image, id,overview}) {
    const route = useRouter();
    const handlerClick = ()=>{
        route.push({
          pathname:`/movie/${id}`,
          query:{
            image:image,
            title:title,
            overview:overview
          }
        });
    }
  return (
    <div>
      <Card style={{ width: '18rem'}} className='shadow'>
      <Card.Img variant="top" src={image ? 
      image : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} 
      style={{ height:"260px", width:"200px", cursor:'pointer' }} className='mx-5 mt-5 mb-5 shadow rounded-0' onClick={handlerClick}/>
      <Card.Body>
        <Card.Title style={
          {
            height:"50px"
          }
          }>{title ? title:"Unknown"}</Card.Title>
        <Card.Text>
            Language: {description ? description :"Unknown"}
        </Card.Text>
        <Button variant="dark" onClick={handlerClick}>Read More</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
