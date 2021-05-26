type propsIcon = {
    name: string
}
const Icon: React.FC<propsIcon> = ({ name }) => {
    return (
        <span className={`icon icon-${name}`}></span>
    )
}
export default Icon