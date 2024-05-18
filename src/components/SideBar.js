import React from 'react'
import { SideBarData } from "./SideBarData"
import "./SideBar.css"
export default function SideBar({ SideBar }) {

    return (
        <>
                <nav className={SideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" >
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.class}>
                            
                                    <span>{item.title}</span>
                                </li>
                            )
                        })}
                        <div className="cart-container">
                            <button className="nav-text cart-btn">Cart</button>
                        </div>
                    </ul>
                </nav>
    


        </>
    )
}

