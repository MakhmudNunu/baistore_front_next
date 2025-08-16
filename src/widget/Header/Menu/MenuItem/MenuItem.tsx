import { IMenuItem } from "@/shared/type/menu.interface";
import Image from "next/image";
import styless from './Menuitem.module.scss'
interface IMenuItemProps {
    menuItem: IMenuItem
}

export default function MenuItem({ menuItem }: IMenuItemProps) {
    return (
                        <nav className={styless.cataloc}>

        <li>
            <Image src={menuItem.image} alt='image' width={24} height={24} />
            <span>{menuItem.title}</span>
        </li>
        </nav>
    )
}