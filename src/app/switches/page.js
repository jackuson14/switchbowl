import Image from "next/image";
import styles from "./layouts.css";
import SwitchCard from "./components/Switch-Card/switch-card";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../layout";

const query = await getDocs(collection(db, "switches"));
const switchesData = [];
query.forEach((doc) => {
  switchesData.push(doc.data());
});

export default function Page() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <Image
            className="logo"
            src="/logo.svg"
            alt="switch"
            height={50}
            width={120}
          />
          <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {switchesData.map((item, index) => (
          <SwitchCard key={index} switchName={item.switchName} manufacturerName={item.switchManufacturer} switchImage={item.images ? item.images[0] : "/switch.jpg"}/>
        ))}
      </div>
    </div>
  );
}
