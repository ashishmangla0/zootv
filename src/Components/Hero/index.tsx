import Container from "../../Elements/Container";
import Section from "../../Elements/Section";
import style from './style.module.scss';
type propsHero =  {
    children :  React.ReactChild | React.ReactChild[],
    className ?: string,
    inner ?: boolean
}
const Hero : React.FC<propsHero> = ({children,inner}) =>{
    return(
        <Section className={`${style.hero} ${ inner ? style.hero_inner : style.hero_home}`}>
            <Container>
                {children}
            </Container>
        </Section>
    )
}


export default Hero