import CardItem from '@components/CardItem';
import * as S from './style';

const Card = () => {
    return ( 
        <S.CardContainer>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </S.CardContainer>
    );
}

export default Card;