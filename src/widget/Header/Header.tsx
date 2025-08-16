import { MENU_DATA } from '@/shared/data/menu.data'
import styles from './Header.module.scss'
import Image from 'next/image'
import Menu from './Menu/Menu'
import Logo from '@/shared/ui/Logo'


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Logo width={118} height={22} />
                        <Image src="/assets/Frame 57.svg" alt='Frame' width={32} height={32} />
                    </div>
                    <div className={styles.search}>
                        <Image src="/assets/icons.png" alt="" width={24} height={24} />
                        <input type="search" name="ad" id="1" placeholder='Поиск' />
                    </div>
                    <Menu />
                </div>
            </div>
        </header>
    )
}