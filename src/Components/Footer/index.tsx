import style from './style.module.scss';
import Container from "../../Elements/Container";
const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_top}>
                <Container>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </Container>
            </div>
            <div className={style.footer_bottom}>
                <Container>
                    © 2021 ZOOTV. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
         </Container>
            </div>

        </footer>
    )
}
export default Footer