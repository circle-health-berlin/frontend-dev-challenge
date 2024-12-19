import styles from "./components.module.css"

interface ListItemWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: string;
}

const ListItemWithIcon = ({ icon, children }: ListItemWithIconProps) => {
    return <div className={styles.listItem}>
        <div className={styles.iconWrapper}>
            <img src={icon} className={styles.icon}></img>
        </div>
        <div className={styles.text}>
            {children}
        </div>
    </div>
}

export default ListItemWithIcon