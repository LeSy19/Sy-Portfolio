import javaImg from '../../assets/skills/java.svg';
import bootstrapImg from '../../assets/skills/bootstrap.svg';
import cssImg from '../../assets/skills/css.svg';
import figmaImg from '../../assets/skills/figma.svg';
import gitImg from '../../assets/skills/git.svg';
import javaScriptImg from '../../assets/skills/javascript.svg';
import mysqlImg from '../../assets/skills/mysql.svg';
import reactImg from '../../assets/skills/react.svg';
import typeScriptImg from '../../assets/skills/typescript.svg';
import htmlImg from '../../assets/skills/html.svg';
import springImg from '../../assets/skills/spring.png';
import swaggerImg from '../../assets/skills/swagger.png';
import sqlserverImg from '../../assets/skills/sqlserver.png';

export const ImageSkills = (skill: string) => {
    const skillID = skill.toLowerCase();

    switch (skillID) {
        case 'java':
            return javaImg;
        case 'bootstrap':
            return bootstrapImg;
        case 'css':
            return cssImg;
        case 'figma':
            return figmaImg;
        case 'git':
            return gitImg;
        case 'javascript':
            return javaScriptImg;
        case 'mysql':
            return mysqlImg;
        case 'react':
            return reactImg;
        case 'typescript':
            return typeScriptImg;
        case 'html':
            return htmlImg;
        case 'spring boot':
            return springImg;
        case 'swagger':
            return swaggerImg;
        case 'sql server':
            return sqlserverImg;
        default:
            break;
    }
}