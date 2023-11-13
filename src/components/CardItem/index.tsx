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
                    {value}
                </S.TotalInput>
            }
            {color == 'red' &&             
                <S.TotalOutput>
                    {value}
                </S.TotalOutput>
            }
            {color == 'black' &&             
                <S.Total>
                    {value}
                </S.Total>
            }
        </S.CardItemC>
    );
}

export default CardItem;