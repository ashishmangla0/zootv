import Container from "../../Elements/Container";
import Section from "../../Elements/Section";
import style from './style.module.scss';
type propsHero =  {
    children :  React.ReactChild | React.ReactChild[],
    className ?: string,
    inner ?: boolean,
    center ?: boolean
}
const Hero : React.FC<propsHero> = ({children,inner,center}) =>{
    return(
        <Section className={`${style.hero} ${ inner ? style.hero_inner : style.hero_home} ${center ? style.hero_center : ''}`}>
            <Container center>
                {children}
            </Container>
        </Section>
    )
}


export default Hero