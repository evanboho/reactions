import React from 'react'
import ReactDOM from 'react-dom'
import ItemCard from '../shared/components/item_card'
import DataAdapter from '../server/data_adapter'

var dataAdapter = dataAdapter = new DataAdapter,
    app, card;

document.addEventListener('DOMContentLoaded', _ => {
  app = document.getElementById('app')
  const dataEl = document.getElementById('server-data')
  const data = JSON.parse(dataEl.innerHTML)
  dataEl.innerHTML = null
  card = ReactDOM.render(<ItemCard {...data} />, app)
});

document.addEventListener('click', (e) => {
  dataAdapter.request('http://localhost:3000/api/v3/items?limit=10', (err, response) => {
    var data = response.body
    const i = Math.floor(data['items'].length * Math.random());
    const itemData = data['items'][i]
    card.setState(itemData);
  });
});

