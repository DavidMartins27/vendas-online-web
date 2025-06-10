import { BackGroundImage, ContainerLoginScreen, LogoImage, ContainerLogin, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import Input from "../../../shared/inputs/input/input";
import Button from "../../../shared/buttons/button/button";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackGroundImage src="./background.png" alt="Background" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" alt="Logo" />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="USUÁRIO" />
                    <Input title="SENHA" />
                    <Button type="primary" margin="62px 0px 16px 0px">ENTRAR</Button> 
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;