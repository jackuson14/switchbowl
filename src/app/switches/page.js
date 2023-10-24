import Image from "next/image";
import styles from "./layouts.css";
import SwitchCard from "./components/Switch-Card/switch-card";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const query = await getDocs(collection(db, "switches"));
const switchesData = [];
query.forEach((doc) => {
  switchesData.push(doc.data());
});

export default function Page() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li className="active">
            <div>
              <span className="material-symbols-outlined">interests</span>
            </div>
            <span className="name">Switches</span>
          </li>
          <li>
            <div>
              <span className="material-symbols-outlined">help</span>
            </div>
            <span className="name">FAQ</span>
          </li>
        </ul>
        <button>
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </nav>
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
      <footer>
        <span>© 2023, SwitchBowl</span>
      </footer>
    </div>
  );
}
