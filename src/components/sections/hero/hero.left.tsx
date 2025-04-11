import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { APP_DATA } from "../../helpers/data";
import ResizeButton from "../resize.button";
import { AiFillFire } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { useTranslation } from "react-i18next";

interface IProps {
    scrollToSKill: () => void;
}
const HeroLeft = (props: IProps) => {
    const { t } = useTranslation();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const handleDownloadCV = () => {
        openInNewTab("https://drive.google.com/file/d/1lRWAeKNS5BWsO48PjbiAhfHTxn0PNOGq/view?usp=sharing")
    }

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
                    onClick={props.scrollToSKill}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire size={18} color="orange" />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)",
                    }}
                />

                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload size={18} />}
                    onClick={handleDownloadCV}
                />


            </div>
        </div>
    )
}
export default HeroLeft;