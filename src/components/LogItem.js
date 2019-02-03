import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Media, Image, Content } from 'react-bulma-components/full'

const LogItem = ({ log, deleteLog }) => {
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
              {'Strain: ' + log.strain}
            </h1>
            {/* <h5 className="subtitle">{'Updates: ' + 0}</h5> */}
          </Media.Item>
        </Media>
        <Content>
          <div className="level is-mobile contract-card-stats">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Planted on</p>
                <p className="title">{log.datetime}</p>
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
          <Link to="/logs/update" renderAs="button" className="button is-primary">Finish</Link>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <Link to="/logs/details" renderAs="button" className="button is-primary">See Details</Link>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <button onClick={() => deleteLog(log.id)} className="button is-primary">Delete</button>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  )
}

export default LogItem
