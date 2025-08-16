import { MENU_DATA } from "@/shared/data/menu.data"
import Image from "next/image"
import MenuItem from "./MenuItem/MenuItem"

export default function Menu() {
    return (
        <nav>
            <ul>
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