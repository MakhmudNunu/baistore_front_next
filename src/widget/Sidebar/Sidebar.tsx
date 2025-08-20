import Logout from "@/shared/ui/Logout/Logout";

import styles from './Sidebar.module.scss'
import Profile from "@/shared/icons/Sidebar/Profile";
import Main from "@/shared/icons/Sidebar/Main";
import Delivery from "@/shared/icons/Sidebar/Delivery";
import Orders from "@/shared/icons/Sidebar/Orders";
import AddProduct from "@/shared/icons/Sidebar/AddProduct";
import Cart from "@/shared/icons/Sidebar/Cart";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.buttons}>
                <Profile />
                <Main />
                <Delivery />
                <Orders />
                <AddProduct />
                <Cart />
            </div>
            <Logout />
        </aside>
    )
}