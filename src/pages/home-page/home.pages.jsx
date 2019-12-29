import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { ROLES } from '../../constants/user.constants';

export const HomePage = (props) => {
    switch (props.type) {
        case ROLES.WORKER:
            return <Redirect to='/workers' />;
        case ROLES.TRADER:
        case ROLES.CLIENT:
        default:
            break;
    }

    return <div>Coming Soon</div>;
};

HomePage.propTypes = {
    type: PropTypes.oneOf(Object.values(ROLES))
};
