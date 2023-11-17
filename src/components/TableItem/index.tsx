import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'
import * as S from './style'

const TableItem = ({item, onDelete} : {item: any; onDelete: any}) => {

  return (
    <S.Tr>
      <S.Td>
        <S.TdSon>
          {item.desc}
        </S.TdSon>
      </S.Td>
      <S.Td>
        <S.TdSonII>
          {item.amount}
        </S.TdSonII>
      </S.Td>
      <S.Td>
        <S.TdSonIII>
          {item.output ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green"/>
          )}
        </S.TdSonIII>
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