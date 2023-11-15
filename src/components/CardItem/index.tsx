import * as S from './style';

const CardItem = ({title, Icon, value, color}: {title: string; Icon: string; value: number; color: string}) => {
    return ( 
        <S.CardItemC>
            <S.Header>
                <S.HeaderTitle>{title}</S.HeaderTitle>
                <Icon/>
            </S.Header>

            {color == 'green' &&             
                <S.TotalInput>
                    R$ {value}
                </S.TotalInput>
            }
            {color == 'red' &&             
                <S.TotalOutput>
                    R$ {value}
                </S.TotalOutput>
            }
            {color == 'black' &&             
                <S.Total>
                    R$ {value}
                </S.Total>
            }
        </S.CardItemC>
    );
}

export default CardItem;