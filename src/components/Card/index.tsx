import CardItem from '@components/CardItem';
import * as S from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Card = ({ input, output, total }: { input: number; output: number; total: number }) => {
    return ( 
        <S.CardContainer>
            <CardItem title="ENTRADAS" Icon={FaRegArrowAltCircleUp} value={input} color="green"/>
            <CardItem title="SAÍDAS" Icon={FaRegArrowAltCircleDown} value={output} color="red"/>
            <CardItem title="TOTAL" Icon={FaDollarSign} value={total} color="black"/>
        </S.CardContainer>
    );
}

export default Card;