import CardItem from '@components/CardItem';
import * as S from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Card = () => {
    return ( 
        <S.CardContainer>
            <CardItem title="ENTRADAS" Icon={FaRegArrowAltCircleUp} value={1200} color="green"/>
            <CardItem title="SAÍDAS" Icon={FaRegArrowAltCircleDown} value={1200} color="red"/>
            <CardItem title="TOTAL" Icon={FaDollarSign} value={1200} color="black"/>
        </S.CardContainer>
    );
}

export default Card;