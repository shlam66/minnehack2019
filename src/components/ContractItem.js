import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Media, Image, Content } from 'react-bulma-components/full'

const ContractItem = ({ contract }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>Contract</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <h1 className="title">{contract.lister.name}</h1>
            <h5 className="subtitle">{contract.lister.email}</h5>
          </Media.Item>
        </Media>
        <Content>
          {'$' + contract.price.toLocaleString('en')}
          <br />
          {contract.farm.acres + ' acres'}
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <Link to="/contracts/buy">Buy</Link>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <a href={`mailto:${contract.lister.email}`}>Email</a>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  )
}

export default ContractItem
