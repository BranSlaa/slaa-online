import React from 'react';
import Link from 'gatsby-link';

import { navigation, color } from '../../global';

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPositionY: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        return window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // + is unary operator, same as Number(scrollPositionY)
        const scrollPositionY = +window.scrollY;
        return this.setState({ scrollPositionY });
    }

    render() {
        const isScrolling = !!this.state.scrollPositionY;
        return (
            <header className={isScrolling ? 'nav isScrolling' : 'nav'}>
                <h1>
                    <Link
                        to={navigation.home.link}
                        title={navigation.home.title}
                        style={{ color: 'white' }}
                    >
                        {navigation.home.text}
                    </Link>
                </h1>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <li>
                        <Link
                            to={navigation.blog.link}
                            title={navigation.blog.title}
                            style={{ color: 'white' }}
                        >
                            {navigation.blog.text}
                        </Link>
                    </li>
                    <li style={{ marginLeft: '1rem' }}>
                        <a
                            href={navigation.contact.link}
                            title={navigation.contact.title}
                            style={{ color: 'white' }}
                        >
                            {navigation.contact.text}
                        </a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
