import { MENU_DATA } from '@/shared/data/menu.data'
import styles from './Header.module.scss'
import Image from 'next/image'
import Menu from './Menu/Menu'


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <div className={styles.imageMain}>
                    <Image src="/data/Baistore (1).png" alt="Baistore" width={118} height={22} />
                </div>
                <div className={styles.Frame}>
                    <Image src="/data/Frame 57.svg" alt='Frame' width={32} height={32} />
                </div>
                <div className={styles.search}>
                    <Image src="/data/icons.png" alt="" width={24} height={24} />
                    <input type="search" name="ad" id="1" placeholder='Поиск' />
                </div>
                <div className={styles.cataloc}>
                    <Menu />
                </div>
            </div>
        </header>
    )
}