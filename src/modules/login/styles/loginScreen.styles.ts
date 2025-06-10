import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const BackGroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img`
    width: 202px;
`;

export const TitleLogin = styled(Title)`
`;

export const ContainerLogin = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    max-width: 646px;
    height: 100vh;
    display: flex;

    align-items: center;
    justify-content: center;
    padding: 22px;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;