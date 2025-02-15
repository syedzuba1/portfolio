import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/syedzuba1" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/syed-zubairahmed/"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/s_zubair_a/"},
    { icon: <FaTwitter />, path: ""},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;