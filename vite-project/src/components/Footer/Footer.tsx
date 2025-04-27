import "./Footer.css";
import CopyableText from "./CopyableText/CopyableText";
import FooterList from "./FooterList/FooterList";

function Footer() {
    return (
        <footer className="mt-5 container-fluid blurbg d-flex justify-content-center">
            <div style={{ maxWidth: "40em" }}>
                <div>
                    <div className="p-1"></div>
                    <div className="d-flex flex-direction-row gap-5 justify-content-start">
                        <FooterList
                            listTitle="My Projects"
                            listElements={[
                                "Tic Tac Toe",
                                "Task List",
                                "View Other Projects",
                            ]}
                        />

                        <div>
                            <h3>Contact Me</h3>
                            <ul className="list-unstyled">
                                <li>
                                    Email-{" "}
                                    <CopyableText text="myemail@example.com"></CopyableText>
                                </li>
                                <li>
                                    LinkedIn-{" "}
                                    <a href="https://www.linkedin.com/in/yogeshvperumal/">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    Resume-
                                    <a href="#">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pb-2"></div>
                <div>&copy;2025 Yogesh Venkatesa Perumal</div>
                <div className="pb-3"></div>
            </div>
        </footer>
    );
}

export default Footer;
