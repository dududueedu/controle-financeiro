import * as S from './style';

const CardItem = ({title, Icon, value}: {title: string; Icon: string; value: number}) => {
    return ( 
        <S.CardItemC>
            <S.Header>
                <S.HeaderTitle>{title}</S.HeaderTitle>
                <Icon/>
            </S.Header>

            <S.Total>
                {value}
            </S.Total>
        </S.CardItemC>
    );
}

export default CardItem;