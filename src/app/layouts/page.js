import Image from 'next/image'
import styles from './layouts.css'

export default function Layouts() {
  return <div className='wrapper'>
    <nav>
      <Image
        className="nav-logo"
        src="logo.svg"
        alt="SwitchBowl Logo"
        width={100}
        height={1}
      />
      <button>
        <span class="material-symbols-outlined">
          account_circle
        </span>
      </button>
    </nav>
    <div className="container">
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
}