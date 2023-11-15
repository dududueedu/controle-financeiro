import Table from "@components/Table";
import * as S from "./style";
import {useState} from 'react'

const Form = ( { handAddFree, transListForm, setTransactions } : {handAddFree: any; transListForm: any, setTransactions: any}) => {

  const [desc, setDesc] = useState(String)
  const [amount, setAmount] = useState(String)
  const [isExpense, setExpense] = useState(Boolean)

  const createID = () => Math.round(Math.random() * 2000)

  const handleSave = () => {
    const amountFormat = parseFloat(amount)
    if(!desc || !amount) {
      alert('Informe a descrição e o valor')
      return;
    }else if(amountFormat < 0){
      alert('O valor deve ser positivo')
    }

    const transaction = {
      id: createID(),
      desc: desc,
      amount: amount,
      output: isExpense
    }

    handAddFree(transaction)

    setDesc("")
    setAmount("")
  }

  return (
    <>
      <S.Container>
        <S.InputContent>
          <S.Label>Descrição</S.Label>
          <S.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </S.InputContent>

        <S.InputContent>
          <S.Label>Valor</S.Label>
          <S.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
        </S.InputContent>

        <S.RadioGroup>
          <S.Input id="rIncome" type="radio" name="group01" defaultChecked onChange={() => setExpense(!isExpense)}/>
          <S.Label htmlFor="rIncome">Entrada</S.Label>

          <S.Input id="rExpenses" type="radio" name="group01" onChange={() => setExpense(!isExpense)}/>
          <S.Label htmlFor="rExpenses">Saída</S.Label>
        </S.RadioGroup>

        <S.Button onClick={handleSave}> ADICIONAR </S.Button>
      </S.Container>
      <Table itens={transListForm} setItens={setTransactions}></Table>
    </>
  )
}

export default Form