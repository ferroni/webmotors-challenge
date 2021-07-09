import logoImg from '../../assets/webmotors.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="lf money" />
            </Content>
        </Container>
    )
}