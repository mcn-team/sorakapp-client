import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { CenteringContainer, Button } from '../../../components';

export const WorkerHome = styled(({ className }) => {
    const match = useRouteMatch();

    return (
        <CenteringContainer className={className}>
            <Button to={`${match.url}/add-component`}>
                Ajouter un composant
            </Button>
            <Button disabled to={`${match.url}/add-product`}>
                Ajouter un produit
            </Button>
            <Button to={'/orders'}>
                Liste des commandes
            </Button>
        </CenteringContainer>
    );
})`
  width: 80%;
  height: 100%;
  justify-content: space-evenly;
  padding-bottom: 10%;
`;

WorkerHome.propTypes = {
    className: PropTypes.string
};
