import QRCode from '../assets/qr-code.png';
import "../styles/Card.css";

const QRCard = () => {
    return (
        <section className="card">
            <img className="card-img" src={QRCode} alt="qr-code"/>
            <div className="card-info">
                <h1 className="card-title">
                    Improve your front-end skills by building projects
                </h1>
                <p className="card-text">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </section>
    );
}

export default QRCard;