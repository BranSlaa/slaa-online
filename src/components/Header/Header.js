import React from "react";
import Link from "gatsby-link";

import { navigation, color } from "../../global";

const Header = () => (
    <header style={{ backgroundColor: color.primary }}>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem"
            }}
        >
            <h1>
                <Link
                    to={navigation.home.link}
                    title={navigation.home.title}
                    style={{ color: "white" }}
                >
                    {navigation.home.text}
                </Link>
            </h1>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <li>
                    <Link
                        to={navigation.blog.link}
                        title={navigation.blog.title}
                        style={{ color: "white" }}
                    >
                        {navigation.blog.text}
                    </Link>
                </li>
                <li style={{ marginLeft: "1rem" }}>
                    <Link
                        to={navigation.contact.link}
                        title={navigation.contact.title}
                        style={{ color: "white" }}
                    >
                        {navigation.contact.text}
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
