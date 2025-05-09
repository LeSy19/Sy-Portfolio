import laptopShop from '../../assets/project/laptop-shop.png';
import SpringRest from '../../assets/project/spring-rest.png';
import detailWebsite from '../../assets/project/detail-website.png';

export const APP_DATA = {
    GITHUB_URL: "https://github.com/LeSy19/",
    EMAIL_URL: "https://mail.google.com/mail/u/1/#inbox/",
    FACEBOOK_URL: "https://www.facebook.com/le.sy.1690/"
};


export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Thực tập sinh phát triển Java",
            en: "Java Developer Intern"
        },
        company: {
            vi: "Công ty Wisdom Engineering And Bussiness Solution",
            en: "Wisdom Engineering And Bussiness Solution Company"
        },
        duration: {
            vi: "9 2024 - 3 2025",
            en: "Sep 2024 - Mar 2025"
        }
    },

]


export const SKILLS_DATA = [
    'Java',
    'Spring Boot',
    'Swagger',
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'MySQL',
    'SQL Server',
    'Git',
    'Bootstrap',
    'Figma',
]



export const PROJECTS = [
    {
        id: 1,
        imgPath: SpringRest,
        title: "Career Connect",
        githubLink: "https://github.com/LeSy19/career-connect",
    },
    {
        id: 2,
        imgPath: laptopShop,
        title: "Laptop Shop Website",
        githubLink: "https://github.com/LeSy19/LaptopShop",
    },
    {
        id: 3,
        imgPath: detailWebsite,
        title: "ACCESSORY RETAIL WEBSITE",
        githubLink: " https://github.com/LeSy19/WebBanPhuKien",
    }
]
