import Table from "@components/Table";
import * as S from "./style";
import {useState} from 'react'
import Swa from 'sweetalert2'

const Form = ( { handAddFree, transListForm, setTransactions } : {handAddFree: any; transListForm: any, setTransactions: any}) => {

  const [desc, setDesc] = useState(String)
  const [amount, setAmount] = useState(String)
  const [isExpense, setExpense] = useState(Boolean)

  const createID = () => Math.round(Math.random() * 2000)

  const handleSave = () => {
    const amountFormat = parseFloat(amount)
    if(!desc || !amount) {
      Swa.fire({
        icon: 'error',
        color: '#000',
        text: 'Todos os campos devem ser preenchidos.',
        confirmButtonColor: 'teal',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000
      })
      return; 
    }else if(amountFormat < 0){
      Swa.fire({
        icon: 'error',
        color: '#000',
        text: 'O valor deve ser positivo. Caso queira cadastrar uma despesa ou prejuízo, marque a opção "SAÍDA".',
        confirmButtonColor: 'teal',
        showCancelButton: false,        
        showConfirmButton: false,
        timer: 5000
      })
      return;
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

  const deleteAll = () => {
    if(transListForm == ''){
      Swa.fire({
        icon: "error",
        text: "Lista vazia, impossível apagar.",
        showConfirmButton: false,
        timer: 1700
      })
    }else{
      Swa.fire({
        icon: 'question',
        color: '#000',
        text: 'Tem certeza que deseja apagar todos os itens?',
        confirmButtonColor: 'teal',
        showCancelButton: true,
        confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.isConfirmed) {
              localStorage.clear()
              window.location.href = "/"
        }else{
            Swa.fire({
                icon: 'success',
                color: '#000',
                text: 'Os registros permaneceram.',
                confirmButtonColor: 'teal',
                showCancelButton: false,
                confirmButtonText: 'Ok!',
            })
        }
      });
    }
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
        <S.Button onClick={deleteAll}> APAGAR TODOS </S.Button>
      </S.Container>
      <Table itens={transListForm} setItens={setTransactions}></Table>
    </>
  )
}

export default Form