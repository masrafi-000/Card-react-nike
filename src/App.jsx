import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import logo from "./assets/logo.png";
import search from "./assets/search.svg";
import bag from "./assets/bag.svg";
import heart from "./assets/heart.svg";
import img_1 from "./assets/Card/img-1.png";
import img_2 from "./assets/Card/img-2.png";
import img_3 from "./assets/Card/img-3.png";
import img_4 from "./assets/Card/img-4.png";
import img_5 from "./assets/Card/img-5.png";
import img_6 from "./assets/Card/img-6.png";

function App() {
  return (
    <>
      <div>
        <Navbar logo={logo} s_icon={search} b_icon={bag} h_icon={heart} />
      </div>
      <div className="card-parent">
        <div className="cards">
          <Card
            img={img_1}
            heading="Nike Air Max Correlate"
            description="Women's Shoes"
            price="$100"
          />
          <Card
            img={img_2}
            heading="Nike Air VaporMax Plus"
            description="Men's Shoes"
            price="$210"
          />
          <Card
            img={img_3}
            heading="Nike Air Max 90"
            description="Men's Shoes"
            price="$110.97"
          />
          <Card
            img={img_4}
            heading="Nike Air Max 270"
            description="Women's Shoes"
            price="$136.97"
          />
          <Card
            img={img_5}
            heading="Nike Air Max 90"
            description="Women's Shoes"
            price="$130"
          />
          <Card
            img={img_6}
            heading="Nike Air Max 1"
            description="Men's Shoes"
            price="$140"
          />
        </div>
      </div>
    </>
  );
}

export default App;
