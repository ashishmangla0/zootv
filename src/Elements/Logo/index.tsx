import LogoURL from '../../resources/logo.png';

type propsLogo = {
    className: string,
    width: number
}
const Logo: React.FC<propsLogo> = ({ className,width }) => {
    return (
        <img src={LogoURL} className={className} width={width} />
    )
}

export default Logo