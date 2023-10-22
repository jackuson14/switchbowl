import Image from "next/image";
import styles from "./layouts.css";

export default function Layouts() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li className="active">
            <div>
              <span class="material-symbols-outlined">interests</span>
            </div>
            <span className="name">Switches</span>
          </li>
          <li>
            <div>
              <span class="material-symbols-outlined">help</span>
            </div>
            <span className="name">FAQ</span>
          </li>
        </ul>
        <button>
          <span class="material-symbols-outlined">account_circle</span>
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
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="switch">
          <Image
            className="switch-image"
            src="/switch.jpg"
            alt="switch"
            width={200}
            height={200}
          />
          <span className="switch-name">Akashi</span>
          <span className="switch-brand">BSUN</span>
          {/* <span class="material-symbols-outlined">
          favorite
        </span> */}
        </div>
      </div>
      <footer>
        <span>© 2023, SwitchBowl</span>
      </footer>
    </div>
  );
}
