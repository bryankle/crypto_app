import React from 'react'
import { Card, Container } from 'semantic-ui-react'

const CardExampleFluid = function({ prices }) {
  const cards = Object.keys(prices).map(function(type) {
    const priceUSD = prices[type]['USD']
    return (
      <Container>
        <Card fluid color="black">
          <Card.Content>
            <Card.Header>{type}</Card.Header>
            <Card.Meta>${priceUSD}</Card.Meta>
            <Card.Description>
              {type} is currently worth ${priceUSD}
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    )
  })

  return <Card.Group>{cards}</Card.Group>
}

export default CardExampleFluid
