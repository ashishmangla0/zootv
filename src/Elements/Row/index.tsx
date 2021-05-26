import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[],
    className ?: string
}
const Row : React.FC<containerProps>  = ({children,className}) =>{
    return (
        <div className={`${style.row} ${className ? className : ''}`}>
            {children}
        </div>
    )
}
export default Row