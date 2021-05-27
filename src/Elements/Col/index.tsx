import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[],
    className ?: string
}
const Col : React.FC<containerProps> = ({children,className}) =>{
    return(
        <div className={`${style.col} ${className ? className : ''}`}>
            {children}
        </div>
    )
}
export default Col