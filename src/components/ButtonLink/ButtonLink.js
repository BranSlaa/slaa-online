import React from 'react';
import Link from 'gatsby-link';

import { color } from '../../global';

const ButtonLink = ({ children, type, ...rest }) => {
    return (
        <Link className="button" {...rest}>
            {children}
        </Link>
    );
};

export default ButtonLink;
