import credit_card from "./assets/credit_card.png";
import plusSvg from "./assets/plus.svg";
import logo from "./assets/logo.svg";
import navToggle from "./assets/navToggle.svg";
import waves from "./assets/waves.mp4";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div>
          <div className="nav">
            <div>
              <img className="logo" src={logo} />
            </div>
            <div className="flex">
              <div className="menu-container">
                <div style={{ paddingLeft: "5rem" }}>
                  <a
                    className="payCheckButton"
                    href="https://paychek.uni.club/"
                  >
                    Uni Paycheck
                  </a>
                  <img className="navToggle" src={navToggle} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <section className="home">
        <div className="home-details">
          <img
            className="cardImg"
            height={100}
            width={100}
            src={credit_card}
          ></img>
          <div className="home-leftContainer">
            <h1>
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <div>
              <p className="cashbackDetails">
                1% Cashback
                <img width={12} height={12} className="plusSvg" src={plusSvg} />
                5x Rewards{" "}
                <img width={12} height={12} className="plusSvg" src={plusSvg} />
                Zero Forex Markup
              </p>
            </div>
            <div className="inputForm">
              <div className=" flex justify-between items-center">
                <div className="flex flex-col">
                  <form>
                    <div className="form-inpputDiv flex items-center ">
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="phoneNumber"
                          placeholder="Enter Phone Number"
                        />
                        <span className="cross"></span>
                      </div>
                      <button className="applyNow" type="submit">
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="consentMsg">
                <input type="checkbox" checked="" id="consent-msg"></input>
                <label
                  for="consent-msg"
                  class="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                >
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </label>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay muted loop className="wave-video">
          <source src={waves} type="video/mp4"></source>
        </video>
      </section>
      <div class="applyNow applyButton">
        <div class="">
          <div class="">
            <span>Apply now</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
