// type propsHeader = {
//     list: any
import style from './style.module.scss';
import Container from "../../Elements/Container"
import Logo from "../../Elements/Logo"
import Social from '../Social';
import Icon from '../../Elements/Icon';
import Row from '../../Elements/Row';
import Col from '../../Elements/Col';
import { Link } from 'react-router-dom';
import Search from '../Search';
// }
const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.header_top}>
                <Container>
                    <Row className={style.header_row}>
                        <Col>
                            <Icon name="call" />
                            Call us 08041010576
                        </Col>
                        <Col>
                            <Social />
                        </Col>
                    </Row>
                </Container>
            </div>
            <nav className={style.header_nav}>
                <Container>
                    <Row className={style.header_row}>
                        <Col>
                            <Link to="/">
                                <Logo width={150} className={style.header_logo} />
                            </Link>
                        </Col>
                        <Col className={style.header_search_wrap}>
                            <Search/>
                        </Col>
                        <Col>
                            <div className={style.header_login}>
                                <Icon name="user"></Icon>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </header>
    )
}

export default Header