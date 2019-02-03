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
            <h1 className="title">
              {'$' + contract.price.toLocaleString('en')}
            </h1>
            <h5 className="subtitle">{contract.farm.acres + ' acres'}</h5>
          </Media.Item>
          <Media.Item>
            {contract.lister.name}
            <br />
            {contract.lister.email}
          </Media.Item>
        </Media>
        <Content>
          <div className="level is-mobile contract-card-stats">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Strain</p>
                <p className="title">{contract.strain.name}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Weight</p>
                <p className="title">{contract.strain.weight}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Market Price</p>
                <p className="title">{contract.strain.market_price}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">PLanting Time</p>
                <p className="title">{contract.strain.planting_time}</p>
              </div>
            </div>
          </div>
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
