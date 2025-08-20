'use client'

import Sidebar from "@/widget/Sidebar/Sidebar";
import { useState } from "react";

import styles from './Main.module.scss'

export default function MainPage() {

    const subTabs = [
        {
            title: 'categories',
            name: 'Категории',
            count: 3
        },
        {
            title: 'brands',
            name: 'Брэнды',
            count: 6
        }
    ]

    const [activeTab] = useState('main')
    const [activeSubTab, setActiveSubTab] = useState('')

    return (
        <div className={styles.main}>
            <Sidebar />
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    {
                        activeTab === 'main' ? (
                            <div className={styles.activeTab}>
                                <h1>Главная</h1>
                                <ul className={styles.list}>
                                    {
                                        subTabs.map(item => {
                                            return (
                                                <li key={item.title}>
                                                    <button onClick={() => setActiveSubTab(item.title)}>
                                                        {item.name}
                                                    </button>
                                                    <h5>{item.count}</h5>
                                                </li>

                                            )
                                        })
                                    }
                                </ul>

                                {/* <Categories />
                                <Brands /> */}
                            </div>
                        ) : activeSubTab ? (
                            <>
                                Что то да активно
                            </>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}