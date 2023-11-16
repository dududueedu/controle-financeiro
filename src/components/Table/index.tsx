import TableItem from '../TableItem'
import * as S from './style'
import Swa from 'sweetalert2'
import think from '../../data/icons/thinking.png'
import accept from '../../data/icons/accept.png'

const Table = ({itens, setItens}: {itens: any, setItens: any}) => {

    const onDeleteFunc = (ID: number) => {

        Swa.fire({
            imageUrl: think,
            imageWidth: 50,
            imageHeight: 50,
            color: '#000',
            title: 'Tem certeza que deseja apagar?',
            confirmButtonColor: 'teal',
            showCancelButton: true,
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                const newArray = itens.filter((transaction : any) => transaction.id !== ID)
                setItens(newArray)
        
                localStorage.setItem("transactions", JSON.stringify(newArray))

                Swa.fire({
                    imageUrl: accept,
                    imageWidth: 50,
                    imageHeight: 50,
                    color: '#000',
                    text: 'O Registro foi excluído!',
                    confirmButtonColor: 'teal',
                    showCancelButton: false,
                    confirmButtonText: 'Ok!',
                })
            }else{
                Swa.fire({
                    imageUrl: accept,
                    imageWidth: 50,
                    imageHeight: 50,
                    color: '#000',
                    text: 'O Registro permanecerá.',
                    confirmButtonColor: 'teal',
                    showCancelButton: false,
                    confirmButtonText: 'Ok!',
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