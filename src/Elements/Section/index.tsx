type propsSectiom =  {
    children :  React.ReactChild | React.ReactChild[],
    className ?: string
}
const Section : React.FC<propsSectiom> = ({className,children}) =>{
return(
    <section className={className ? className : ''}>
        {children}
    </section>
)
}


export default Section