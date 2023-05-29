import logo from './logo.svg';
import './App.module.css';
import styles from './App.module.css'
import {useState} from "react";

function App() {
    const [isMouseOverButton, setIsMouseOverButton] = useState(false);
  return (
    <div className="App">
        <div className={styles.buttonWrapper} style={!isMouseOverButton ? { background: "#0092DD" } : {background: "linear-gradient(166.51deg, rgba(255, 255, 255, 0) 9.67%, rgba(254, 254, 254, 0.5) 227.74%), #0092DD", width:280}} onMouseOver={() => setIsMouseOverButton(true)}
             onMouseLeave={() => setIsMouseOverButton(false)}>
            <div className={styles.buttonText} style={{ display: 'flex', marginLeft: 30 }}>
                Перейти к товарам
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', marginRight: 30 }}>
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3333 2.9747C25.3366 4.44746 26.5332 5.6387 28.006 5.63541C29.4787 5.63212 30.6699 4.43555 30.6667 2.9628C30.6634 1.49004 29.4668 0.298802 27.994 0.30209C26.5213 0.305377 25.3301 1.50195 25.3333 2.9747ZM0.00111607 3.53125L28.0011 3.46875L27.9989 2.46875L-0.00111607 2.53125L0.00111607 3.53125Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
  );
}

export default App;
