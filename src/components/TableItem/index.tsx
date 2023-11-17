import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'
import * as S from './style'

const TableItem = ({item, onDelete} : {item: any; onDelete: any}) => {

  return (
    <S.Tr>
      <S.Td>
        {item.desc}
      </S.Td>
      <S.Td>
        {item.amount}
      </S.Td>
      <S.Td>
        {item.output ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green"/>
        )}
      </S.Td>
      <S.Td>
        <S.deleteDiv>
          <FaTrash onClick={() => onDelete(item.id)}/>
        </S.deleteDiv>
      </S.Td>
    </S.Tr>
  )
}

export default TableItem