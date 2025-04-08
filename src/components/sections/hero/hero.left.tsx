import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { APP_DATA } from "../../helpers/data";
import ResizeButton from "../resize.button";
import { AiFillFire } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";

const HeroLeft = () => {
    return (
        <div className="hero-left">
            <h3>
                Hi There {" "}
                <span className="wave" role="img">👋🏻</span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">LE VAN SY</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "Java Developer",
                        "Backend Developer",
                        "ReactJs Developer",
                    ],
                    autoStart: true, //tự động bắt đầu gõ chữ
                    loop: true, //lặp lại hiệu ứng nhiều lần
                    deleteSpeed: 50, //tốc độ xoá chữ
                    wrapperClassName: "brand-green"
                }}
            />
            <SocialMedia
                github={APP_DATA.GITHUB_URL}
                mail={APP_DATA.EMAIL_URL}
                facebook={APP_DATA.FACEBOOK_URL}
            />
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    btnText="My Skill"
                    btnIcons={<AiFillFire size={18} color="orange" />}
                    btnStyle={{
                        border: "1px solid #444",
                        padding: "10px 24px",
                        borderRadius: "50px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        gap: 3
                    }}
                />

                <ResizeButton
                    btnText="Get CV"
                    btnIcons={<MdFileDownload size={18} />}
                    btnStyle={{
                        border: "1px solid #444",
                        padding: "10px 24px",
                        borderRadius: "50px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        gap: 6
                    }}
                />


            </div>
        </div>
    )
}
export default HeroLeft;