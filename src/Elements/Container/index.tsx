import style from './style.module.scss';
type containerProps =  {
    children :  React.ReactChild | React.ReactChild[],
    fluid ?: boolean,
    center ?: boolean

}
const Container : React.FC<containerProps>  = ({children,fluid,center}) =>{
    return (
        <div className={`${fluid ? style.container_fluid : style.container} ${center ? style.container_center: ''}`}>
            {children}
        </div>
    )
}
export default Container