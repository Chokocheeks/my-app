import styles from './Button.module.css';

export const Button = (props) => {

    const{disabled, title,type, click} = props;

    const st = {
        primary: styles.primary,
        secondary: styles.secondary,
    };

    const getFirstLetters = (name) => name.split(' ').map(el => el[0].toUpperCase()).join('');

    return <button disabled={disabled}className={`${styles.main} ${st[type]}`}  click={click}>
        <div className={styles.letters}>{getFirstLetters(title)}</div>
        { title}
        </button>;
}