import CardItem from '@components/CardItem';
import * as S from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Card = () => {
    return ( 
        <S.CardContainer>
            <CardItem title="ENTRADAS" Icon={FaRegArrowAltCircleUp} value={1200}/>
            <CardItem title="SAÍDAS" Icon={FaRegArrowAltCircleDown} value={1200}/>
            <CardItem title="TOTAL" Icon={FaDollarSign} value={1200}/>
        </S.CardContainer>
    );
}

export default Card;