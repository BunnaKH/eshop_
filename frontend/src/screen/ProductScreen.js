import React,{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';


const ProductScreen = () => {
  const {id} =  useParams();
  const [product, setProuduct] = useState({});
 
    useEffect(()=>{
      const fetchProduct = async () =>{
        const {data} = await axios.get(`/api/products/${id}`)
        
      setProuduct(data)
 
      }
      fetchProduct();

    })
 
  return (
   <>
   <Link to ='/' className='btn btn-dark my-3'>Go Back</Link>
   <Row>
    <Col md={6}>
       <Image src={product.image} alt={product.name}/>
    </Col>
    <Col md={3}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </ListGroup.Item>
        <ListGroup.Item>
         Price ; ${product.price}
        </ListGroup.Item>
        <ListGroup.Item>
         Description: {product.description}
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col md={3}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col>
              Price:
              </Col>
              <Col>
            <strong>${product.price}</strong>
              </Col>
            </Row>
          </ListGroup.Item>

        </ListGroup>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col>
              Status:
              </Col>
              <Col>
            {product.contInStock > 0 ? 'In Stock':'Out of Stock'}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button disabled={product.contInStock === 0} className='btn-block' type='button'> ADD TO CART</Button>
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </Col>
   </Row>
   </>
  )
}

export default ProductScreen
