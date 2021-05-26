import style from './style.module.scss';
import Container from "../../Elements/Container";
import Row from '../../Elements/Row';
import Heading from '../../Elements/Heading';
import Col from '../../Elements/Col';
import Social from '../Social';
import {
    Link
  } from "react-router-dom";
const footerLinks = [{
    "link" : "terms",
    "title": "Terms Of Use"
},
{
    "link" : "privacy-policy",
    "title": "Privacy Policy"
},
{
    "link" : "faq",
    "title": "FAQ"
}
]
const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_top}>
                <Container>
                    <Row className={style.footer_row}>
                        <Col>
                            <Heading level="4" title={"Links"} className={style.footer_title} />
                            <ul role="list" className={style.footer_list}>
                                {footerLinks.map((item) => <li role="none">
                                <Link to={`/${item.link}`} role="listitem">{item.title}</Link></li>)}
                            </ul>
                        </Col>
                        <Col>
                            <Heading level={"4"} title={"Follow Us"} className={style.footer_title} />
                            <Social className={style.footer_social} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={style.footer_bottom}>
                <Container>
                    © 2021 ZOOTV. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited.
                </Container>
            </div>
        </footer>
    )
}
export default Footer