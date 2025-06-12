import { BackGroundImage, ContainerLoginScreen, LogoImage, ContainerLogin, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import Input from "../../../shared/inputs/input/input";
import Button from "../../../shared/buttons/button/button";
import { useState } from "react";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        console.log(event);
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value); 
        console.log(event);
    };
    const handleLogin = () => {
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <ContainerLoginScreen>
            <BackGroundImage src="./background.png" alt="Background" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" alt="Logo" />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUserName} value={username} />
                    <Input title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password} />
                    <Button type="primary" margin="62px 0px 16px " onClick={handleLogin}>ENTRAR</Button> 
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;