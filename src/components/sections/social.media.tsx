import { FaGithub } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

interface IProps {
    github: string;
    mail: string;
    facebook: string;
}
const SocialMedia = (props: IProps) => {

    const { github, mail, facebook } = props;

    return (
        <div className="my-4 d-flex gap-3 items-center">
            <a href={github} target="_blank" className="high-light" title="Github SyLe">
                <FaGithub size={30} />
            </a>
            <a href={mail} target="_blank" className="high-light" title="Github SyLe">
                <IoIosMailUnread size={30} />
            </a>
            <a href={facebook} target="_blank" className="high-light" title="Github SyLe">
                <FaFacebook size={30} />
            </a>
        </div>
    )
}
export default SocialMedia;