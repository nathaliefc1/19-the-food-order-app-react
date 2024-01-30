//import '../index.css'
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <div className="">
        <div className="main-header">
            <h1>The Food Order App</h1>
            <img src={logo} alt="Logo Food Order App" />
        </div>
        <div>
          <button>Cart</button>
        </div>
      </div>
    </>
  );
}
