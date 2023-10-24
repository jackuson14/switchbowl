
import styles from "./nav.css";

export default function Nav({children}) {
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
    {children}
    </div>
    );
  }
  