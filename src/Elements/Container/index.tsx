import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[]

}
const Container : React.FC<containerProps>  = ({children}) =>{
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
export default Container