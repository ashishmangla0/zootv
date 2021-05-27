import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[],
    fluid ?: boolean

}
const Container : React.FC<containerProps>  = ({children,fluid}) =>{
    return (
        <div className={ fluid ?style.container_fluid : style.container}>
            {children}
        </div>
    )
}
export default Container