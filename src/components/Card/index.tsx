import CardItem from '@components/CardItem';
import * as S from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Card = () => {
    return ( 
        <S.CardContainer>
            <CardItem title="ENTRADAS" Icon={FaRegArrowAltCircleUp}/>
            <CardItem title="SAÍDAS" Icon={FaRegArrowAltCircleDown}/>
            <CardItem title="TOTAL" Icon={FaDollarSign}/>
        </S.CardContainer>
    );
}

export default Card;