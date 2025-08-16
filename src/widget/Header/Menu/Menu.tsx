import { MENU_DATA } from "@/shared/data/menu.data"
import MenuItem from "./MenuItem/MenuItem"

import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.menu}>
                {
                    MENU_DATA.map((item, index) => {
                        return (
                            <MenuItem key={item.title} menuItem={item} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}