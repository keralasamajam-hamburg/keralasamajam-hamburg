import React from 'react'
import styles from './NavLink.module.scss'
import { Link } from 'react-router-dom'
interface PropsType {
    heading: string,
    urlPath: string
}

const NavLink: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.tab}>
            <Link to={props.urlPath}>{props.heading}</Link>
        </div>
    )
}
export default NavLink