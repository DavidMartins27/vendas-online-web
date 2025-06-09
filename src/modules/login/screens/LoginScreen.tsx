import { BackGroundImage, ContainerLoginScreen, LogoImage, ContainerLogin, LimitedContainer } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackGroundImage src="./background.png" alt="Background" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" alt="Logo" />
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;