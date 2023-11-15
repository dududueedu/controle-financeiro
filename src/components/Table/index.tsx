import TableItem from '../TableItem'
import * as S from './style'

const Table = ({itens, setItens}: {itens: any, setItens: any}) => {

    const onDeleteFunc = (ID: number) => {
        const newArray = itens.filter((transaction : any) => transaction.id !== ID)
        setItens(newArray)

        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

  return (
    <S.Table>
        <S.Thead>
            <S.Tr>
                <S.Th width={30}> Descrição </S.Th>
                <S.Th width={30}> Valor </S.Th>
                <S.Th width={30}> Tipo </S.Th>
                <S.Th width={0}> Apagar </S.Th>
            </S.Tr>
        </S.Thead>

        <S.Tbody>
            {itens?.map((item: any, index: number) => (
                <TableItem key={index} item={item} onDelete={onDeleteFunc}/>
            ))}
        </S.Tbody>
    </S.Table>
  )
}

export default Table