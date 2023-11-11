import * as S from './style';

const CardItem = ({title, Icon}: {title: string; Icon: string}) => {
    return ( 
        <S.CardItemC>
            <S.Header>
                <S.HeaderTitle>{title}</S.HeaderTitle>
                <Icon/>
            </S.Header>

            <S.Total>
                1200
            </S.Total>
        </S.CardItemC>
    );
}

export default CardItem;