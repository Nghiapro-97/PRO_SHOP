import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='row text-center fs-4 my-4'>
      <Nav.Item className='col-sm m-0 p-0'>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className='border-bottom border-primary'>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='col-sm m-0 p-0'>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className='border-bottom border-primary'>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='col-sm m-0 p-0'>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className='border-bottom border-primary'>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='col-sm m-0 p-0'>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className='border-bottom border-primary'>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
