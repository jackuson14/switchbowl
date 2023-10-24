import Image from "next/image";
import styles from "./switch-card.css";

export default function SwitchCard({switchName, manufacturerName, switchImage }) {
return (
    <div className="switch">
    <Image
        className="switch-image"
        src={switchImage}
        alt="switch"
        width={200}
        height={200}
    />
    <span className="switch-name">{switchName}</span>
    <span className="switch-brand">{manufacturerName}</span>
    {/* <span className="material-symbols-outlined">
        favorite
    </span> */}
    </div>
);
}
