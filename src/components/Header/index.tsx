//import ESLogo from "../../data/icons/logo.png";
import * as S from "./style";
import ESLogo from "../../data/icons/logo.png";

const Header = () => {
  return (

        <S.ContainerStyle>
            <S.HStyle>
                <S.HLogo>
                  <S.A href="http://eaportfolio.carrd.co" target="_blank">
                    <S.HImg src={ESLogo} alt="ES logo" />
                  </S.A>
                </S.HLogo>  
                <S.TitleStyle> ES Acessórios </S.TitleStyle>
            </S.HStyle>
        </S.ContainerStyle>

  );
};

export default Header;
