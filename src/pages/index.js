
import { Inter } from 'next/font/google'
import React from 'react'
import { Container} from 'react-bootstrap'
import Carousel_ from '@/component/Carousel_'
import { API_KEY,BASE_PATH,BASE_URL } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Container className=''>
        <Carousel_/>
        {/* Section */}
        <section class="jumbotron text-center mt-5">
        <div class="container">
          <h1 class="jumbotron-heading">Welcome To Movie Box</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="/about" class="btn btn-dark my-2 mx-2">About us</a>
            <a href="/movie" class="btn btn-light my-2 mx-2">View movies</a>
          </p>
        </div>
      </section>
      </Container>
    </React.Fragment>
  )
}
