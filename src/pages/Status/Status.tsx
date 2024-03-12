import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Drone from "../../assets/drone.svg";
import Rectangle11 from "../../assets/rectangle11.svg";
import Cool from "../../assets/ok-cool.svg";
import './status.scss';

const Status = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { eta, orderNr } = location.state || {};

    const handleOkClick = () => {
        navigate('/');
    };

     return (
        <div className='status-container'>
            {orderNr ? (
                <>
                    <section className='status-container_order-number'>
                        <h6>Ordernummer <b>#{orderNr}</b></h6>
                        <p><img src={Drone} alt="" /></p>
                    </section>

                    <section className='status-container_timer'>
                        <h3>Din beställning</h3>
                        <h3> är på väg!</h3>
                        <p><b>{eta}</b> minuter</p>
                    </section>

                    <button className='btn-cool' onClick={handleOkClick}> <img className='cool' src={Cool} alt="" /><img className='rectangle' src={Rectangle11} alt="" /></button>
                </>
            ) : (
                <p>VARUKORGEN ÄR TOM!</p>
            )}
        </div>
    );
};

export default Status;


