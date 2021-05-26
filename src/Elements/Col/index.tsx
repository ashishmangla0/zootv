import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[]
}
const Col : React.FC = ({children}) =>{
    return(
        <div className={style.col}>
            {children}
        </div>
    )
}
export default Col