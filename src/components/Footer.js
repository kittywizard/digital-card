import Icon from "./Icon"

const twitter = <i class="fab fa-twitter-square footer-icon"></i>;
const facebook = <i class="fab fa-facebook-square footer-icon"></i>;
const instagram = <i class="fab fa-instagram-square footer-icon"></i>;
const github = <i class="fab fa-github-square footer-icon"></i>;


export default function Footer() {
    return (
        <footer className="footer">
            <Icon url={twitter}/>
            <Icon url={facebook}/>
            <Icon url={instagram}/>
            <Icon url={github}/>
        </footer>
    )
}
