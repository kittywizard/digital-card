import logo from '../img/me.svg';
import Button from './Button';

const email = <i class='fas fa-envelope'></i>;
const linkedin = <i class='fab fa-linkedin '></i>;

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="drawing of a person" className="portrait"></img>
            <h2 className="name--headline">Marleigh Morgan</h2>
            <h5 className="name--subhead">Front End Developer</h5>
            <p className="name--website">
                <a href="http://marleighmorgan.com" className="name--url">website</a>
            </p>
            <Button name="Email" url={email} cls="btn"/>
            <Button name="LinkedIn" url={linkedin} cls="btn btn-li"/> 
        </header>

    )
}
