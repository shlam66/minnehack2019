import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Media, Image, Content } from 'react-bulma-components/full'

const LogItem = ({ log }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>Log</Card.Header.Title>
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
              {'Started on ' + log.datetime}
            </h1>
            {/* <h5 className="subtitle">{'Started on ' + log.datetime}</h5> */}
          </Media.Item>
        </Media>
        <Content>
          <div className="level is-mobile contract-card-stats">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Strain</p>
                <p className="title">{log.strain}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Number of plants</p>
                <p className="title">{log.num_plants}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Acres used</p>
                <p className="title">{log.num_acres}</p>
              </div>
            </div>
          </div>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <Link to="/logs/add">Add</Link>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <Link to="/logs/">Delete</Link>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  )
}

export default LogItem
