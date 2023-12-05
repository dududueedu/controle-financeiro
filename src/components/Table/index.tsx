import TableItem from '../TableItem'
import * as S from './style'
import Swa from 'sweetalert2'

const Table = ({itens, setItens}: {itens: any, setItens: any}) => {

    const onDeleteFunc = (ID: number) => {

        Swa.fire({
            icon: 'question',
            color: '#000',
            text: 'Tem certeza que deseja apagar?',
            confirmButtonColor: 'teal',
            showCancelButton: true,
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                const newArray = itens.filter((transaction : any) => transaction.id !== ID)
                setItens(newArray)
        
                localStorage.setItem("transactions", JSON.stringify(newArray))

                Swa.fire({
                    icon: 'success',
                    color: '#000',
                    text: 'O registro foi excluído!',
                    confirmButtonColor: 'teal',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1600
                })
            }else{
                Swa.fire({
                    icon: 'success',
                    color: '#000',
                    text: 'O registro permanecerá.',
                    confirmButtonColor: 'teal',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1600
                })
            }
        });

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