import Header from '@components/Header/'
import GlobalStyle from './style/global'
import Card from '@components/Card'
import Form from '@components/Form'
import { useState, useEffect } from 'react'

function App() {
  const data = localStorage.getItem("transactions")
  const [transList, setTransactions] = useState(data ? JSON.parse(data) : [])
  const [input, setInput] = useState(Number)
  const [output, setOut] = useState(Number)
  const [total, setTotal] = useState(Number)

  useEffect(() => {
    const amountOutput = transList
      .filter((data: any) => data.output)
      .map((transaction: any) => Number(transaction.amount))

    const amountInput = transList
      .filter((data: any) => !data.output)
      .map((transaction: any) => Number(transaction.amount))

    const output = amountOutput.reduce((acc: any, cur: any) => acc + cur, 0)
    const input = amountInput.reduce((acc: any, cur: any) => acc + cur, 0)

    const total = (input - output).toFixed(2)
    const totalFormat = parseFloat(total)

    setInput(input)
    setOut(output)

    setTotal(totalFormat)
  }, [transList])

  const handAdd = ( transaction:any ) => {
    const newArray = [...transList, transaction]

    setTransactions(newArray)

    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return (
    <>
      <Header/>
      <Card input={input} output={output} total={total}/>
      <Form handAddFree={handAdd} transListForm={transList} setTransactions={setTransactions}/>
      <GlobalStyle/>
    </>
  )
}

export default App
