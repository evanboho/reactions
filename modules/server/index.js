import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DataAdapter from './data_adapter'
import ItemCard from '../shared/components/item_card'
import _ from 'underscore'

const app = express();
const port = process.env.PORT || 4444;

app.get('/', (req, res) => {
  const dataAdapter = new DataAdapter

  dataAdapter.request('http://localhost:3000/api/v3/items', (err, response) => {
    const body = response.body;
    const i = Math.floor(body['items'].length * Math.random())
    const data = body['items'][i]
    const itemCard = ReactDOMServer.renderToString(<ItemCard {...data} />)

    const serverData = JSON.stringify(data)

    const html = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <script id="server-data" type="application/json" dangerouslySetInnerHTML={{__html: serverData}} />
          <script src='http://localhost:3001/bundle.js'></script>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: itemCard}} />
        </body>
      </html>
    )

    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    res.end('<!doctype html>' + html)
  });

})

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server pid ${process.pid} listening on port ${port}`)
});
