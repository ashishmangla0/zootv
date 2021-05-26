import Icon from '../../Elements/Icon';
import style from './style.module.scss';
const SocialList = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/GSN-co-100228551567383'
    },
    {
        name: 'twitter',
        url: 'https://www.facebook.com/GSN-co-100228551567383'
    },
    {
        name: 'instagram',
        url: 'https://www.facebook.com/GSN-co-100228551567383'
    },
    {
        name: 'youtube',
        url: 'https://www.facebook.com/GSN-co-100228551567383'
    },
    {
        name: 'linkedin',
        url: 'https://www.facebook.com/GSN-co-100228551567383'
    }
]
type propsSocial = {
    className ?: string | string[]
}
const Social: React.FC<propsSocial> = ({className}) => {
    return (
        <div className={`${style.social} ${className ? className : ''}`} role="list">
            {SocialList.map((item, index) => <a className={style.social_item} key={index} href={item.url} target="_blank" rel="noreferrer">
                <Icon name={item.name} />
            </a>)}
        </div>
    )
}
export default Social