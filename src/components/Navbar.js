import { useState } from "react";
import "../styles/Navbar.css"
const Navbar=()=>{
    const [count,setCount]=useState("0");
  function deneme(){
         if(count==0){
            setCount("1");
         }
         else{
            setCount("0")
         }
  }
    return(
<nav>
    <div className="logo">ŞİRKETTO</div>
    <div className="ana-menu">
        <label   htmlFor="menu-check">MENU</label>
        <input onClick={deneme}  type="checkbox" id="menu-check" />
        <ul id={count==="0"?"label1":"label2"} className="menu-links">
            <li><a className="link1" href="#">ANA SAYFA</a></li>
            <li><a className="link1"  href="#">YAZILAR</a></li>
            <li><a className="link1"href="#">GALERİ</a></li>
            <li><a className="link1" href="#">HAKKIMDA</a></li>
            <li><a className="link1" href="#">İLETİŞİM</a></li>
        </ul>
    </div>
</nav>
    )
}

export default Navbar;