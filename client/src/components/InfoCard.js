import React from 'react'
import { Card, Icon, Modal, Header, Search } from 'semantic-ui-react'

const CardExampleFluid = function({ prices }) {
  const cards = Object.keys(prices).map(function(type) {
    const priceUSD = prices[type]['USD']
    return (
      <Card fluid color="black">
        <Card.Content>
          <Card.Header>{type}</Card.Header>
          <Card.Meta>${priceUSD}</Card.Meta>
          <Card.Description>
            {type} is currently worth ${priceUSD}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group>
      {cards}
      <Card fluid color="black">
        <Card.Content>
          <Card.Description>
            Add another coin

            <Modal trigger={<Icon size="large" name="add circle" />}>
              <Modal.Header>Add a coin</Modal.Header>
              <Modal.Content image>
               
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <Search />
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>

          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default CardExampleFluid
