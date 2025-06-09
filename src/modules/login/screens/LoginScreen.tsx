import { BackGroundImage, ContainerLoginScreen, LogoImage, ContainerLogin, LimitedContainer } from "../styles/loginScreen.styles";
import Input from "../../../shared/inputs/input/input";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackGroundImage src="./background.png" alt="Background" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" alt="Logo" />
                    <Input title="USUÁRIO"/>
                    <Input title="SENHA"/>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;