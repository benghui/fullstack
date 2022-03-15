import { useEffect, useState } from 'react'
// import axios from 'axios';
import './App.css'
import Transaction from './components/Transaction';

export default function App() {
  // const url = "http://localhost:3000/transactions"

  const [transactions, setTransactions] = useState([
    {
      "id": "1",
      "transactionHash": "0xb82840eb139e748da528f311ad24caf78660968293a75bf187824668d78d1181",
      "from": "0x74259b68b03bd976b9254a74920c636cce0c5b72",
      "to": "0xea5070a59274227bde521639d18f56e93ea13530",
      "value": "0.293"
    },
    {
      "id": "2",
      "transactionHash": "0xa0bdca15766e7b06f30ce5c85b83fc93e96c60859851875282b47a75fdd3f6b9",
      "from": "0x720f74a4e1b5a625d91d31e58a6cf88a80e89549",
      "to": "0xfc7f6864173580e4542d4e68d4a447f98dcd4103",
      "value": "1.5"
    }
  ]);

  // useEffect(async () => {
  //   await axios.get(url)
  //     .then(res => {
  //       setTransactions(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className="App">
      {
        transactions.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              transactionHash={transaction.transactionHash}
              from={transaction.from}
              to={transaction.to}
              value={transaction.value}
            />
          )
        })
      }
    </div>
  )
}
