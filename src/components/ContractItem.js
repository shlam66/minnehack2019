import React from 'react'
import { Card, Media, Image, Content } from 'react-bulma-components/full'

const ContractItem = ({ contract }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              renderAs="p"
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
          {contract.price}
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>Yes</Card.Footer.Item>
        <Card.Footer.Item>No</Card.Footer.Item>
        <Card.Footer.Item>Maybe</Card.Footer.Item>
      </Card.Footer>
    </Card>
    // <div className="contractitem-div">
    //     <h1>{contract.name}</h1>
    //     <h2>{contract.land} Acres</h2>
    //     <h2>{contract.price}$</h2>
    //     <h2>{contract.email}</h2>
    // </div>
  )
}

export default ContractItem
