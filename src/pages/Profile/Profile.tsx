import "./profile.scss"
import Header from "../../components/Header";
import ProfileIcon from "../../assets/profile-icon.svg";
import ProfileEllipse from "../../assets/profile-ellipse.svg";
import Rectangle from "../../assets/rectangle22.svg";
import ButtonText from "../../assets/brew-me-a-cup.svg";


const Profile = () => {
  return (
    <div className="profile-container" >
       
            <Header />
        
            <section className="background-overlay">
                <section className="profile-content" >
                    <section className="welcome-text">
                        <section className="welcome-text-title">
                            <img src={ProfileIcon} alt="" />
                            <h4>Välkommen till</h4>
                            <h4>AirBean-familjen!</h4>
                        </section>
                        <section className="welcome-text-paragraph">
                            <p>Genom att skapa ett konto nedan kan</p>
                            <p>du spara och se din orderhistorik.</p>
                        </section>
                
                    </section>
                    <section className="profile-container-form">
                        <section className="profile-form">
                            <label htmlFor="none">Namn</label>
                            <input type="text" id="none" />
                        </section>
                        <section className="profile-form">
                            <label htmlFor="none">Epost</label>
                            <input type="text" id="none" />
                        </section>
                        <section className="gdpr-container">
                            <img src={ProfileEllipse} alt="" />
                            <p>GDPR Ok!</p>
                        </section>
                    </section>
                     <button className="profile-button-container">
                        <img className="rectangle" src={Rectangle} alt="" />
                        <img className="text" src={ButtonText} alt="" />
                
                    </button>
                
                </section>
            </section>
    </div>
  )
}

export default Profile