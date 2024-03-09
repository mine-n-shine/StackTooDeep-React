import "./App.css";
import blocsoc_black from "./blocsoc-black.png";
import discord from "./discord.png";
import email from "./email.webp";
import favicon1 from "./favicon1.png";
import instagram from "./instagram.webp";
import linkedin from "./linkedin.webp";
import logo from "./logo.svg";
import main from "./main.webp";
import twitter from "./twitter.webp";
import website from "./website.webp";

function App() {
  return (
    <>
      <div class="header">
        <img class="logo" src={blocsoc_black} alt="BlocSoc Logo" />
        <div class="brand-container">
          <img class="brand-logo" src={logo} alt="StackTooDeep Logo" />
          <div class="brand-title">StackTooDeep</div>
        </div>
        <div class="nav">
          <div class="nav-item">Overview</div>
          <div class="nav-item">Prizes</div>
          <div class="nav-item">Schedule</div>
          <div class="nav-item">Projects</div>
        </div>
      </div>

      <div class="main-image1">
        <img class="main-image" src={main} alt="Main Image" />
      </div>

      <br></br>

      <p class="description">
        StackTooDeep is the inaugural ethereum focused hackathon conducted by
        Blockchain
        <br />
        Society IIT Roorkee. It aims to foster a culture of web3 development in
        our campus
        <br />
        and promotes decentralized innovation!
      </p>

      <p class="note">Note: This hackathon is only for the students of IITR</p>

      <div class="schedule-container">
        <div class="schedule-box">
          <div class="schedule-title">HACKATHON SCHEDULE</div>

          <div class="schedule-event">
            <div class="event-title">Registration Starts</div>
            <div class="event-time">05 JANUARY 2024 - 03:00 AM IST</div>
          </div>

          <div class="schedule-event">
            <div class="event-title">Registration Ends</div>
            <div class="event-time">13 JANUARY 2024 - 11:59 PM IST</div>
          </div>

          <div class="schedule-event">
            <div class="event-title">Hackathon Starts</div>
            <div class="event-time">12 JANUARY 2024 - 09:00 PM IST</div>
          </div>

          <div class="schedule-event">
            <div class="event-title">Hackathon Ends</div>
            <div class="event-time">14 JANUARY 2024 - 04:30 PM IST</div>
          </div>
        </div>

        <div class="tracks-box">
          <div class="tracks-title">TRACKS & PRIZES</div>

          <div class="tracks-item">
            <div class="item-title">Total Prize Pool :</div>
            <div class="item-value">$2,300</div>
          </div>

          <div class="tracks-item">
            <div class="item-title">Open Track :</div>
            <div class="item-value">$1,200</div>
          </div>

          <div class="tracks-item">
            <div class="item-title">Freshers Track :</div>
            <div class="item-value">$300</div>
          </div>

          <div class="tracks-item">
            <div class="item-title">UniDAO Track :</div>
            <div class="item-value">$400</div>
          </div>
        </div>
      </div>

      <div class="social-boxes">
        <div class="social-box">
          <img class="social-image" src={email} alt="Email Icon" />
          <p class="social-title">Email</p>
          <a class="social-link" href="mailto:blocsoc.acm@iitr.ac.in">
            blocsoc.acm@iitr.ac.in
          </a>
        </div>

        <div class="social-box">
          <img class="social-image" src={website} alt="Website Icon" />
          <p class="social-title">Website</p>
          <a
            class="social-link"
            target="_blank"
            href="https://blocsoc.iitr.ac.in/"
          >
            Blocsoc's Website
          </a>
        </div>

        <div class="social-box">
          <img class="social-image" src={twitter} alt="Twitter Icon" />
          <p class="social-title">Twitter</p>
          <a
            class="social-link"
            target="_blank"
            href="https://twitter.com/BlocSocIITR"
          >
            Twitter Handle
          </a>
        </div>

        <div class="social-box">
          <img class="social-image" src={discord} alt="Discord Icon" />
          <p class="social-title">Discord</p>
          <a
            class="social-link"
            target="_blank"
            href="https://discord.com/invite/Zvq3rpjBAB"
          >
            Discord Invite
          </a>
        </div>

        <div class="social-box">
          <img class="social-image" src={linkedin} alt="LinkedIn Icon" />
          <p class="social-title">LinkedIn</p>
          <a class="social-link" target="_blank" href="https://linkedin.com/">
            LinkedIn Profile
          </a>
        </div>

        <div class="social-box">
          <img class="social-image" src={instagram} alt="Instagram Icon" />
          <p class="social-title">Instagram</p>
          <a class="social-link" target="_blank" href="https://instagram.com/">
            Insta Handle
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
