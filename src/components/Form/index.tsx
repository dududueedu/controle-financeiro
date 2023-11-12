import * as S from "./style";
import {useState} from 'react'

const Form = () => {

  const [desc, setDesc] = useState(String)
  const [amount, setAmount] = useState(String)
  const [isExpense, setExpense] = useState(Boolean)

  const handleSave = () => {
    if(!desc || amount) {
      alert('Informe a descrição e o valor')
      return;
    }else{
      alert('O valor deve ser positivo')
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
      </S.Container>
    </>
  )
}

export default Form