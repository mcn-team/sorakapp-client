import React from 'react';
import styled from 'styled-components';

import { Title } from '../../components';
import { OrderListing } from './components/order-listing.component';
import { Products } from '../../services/orders.services';

const PageContainer = styled.div`
  width: 80%;
  overflow: scroll;
`;

export const OrdersPage = () => {
    return (
        <PageContainer>
            <Title>Orders</Title>
            <OrderListing fetch={Products.getManyOrders} />
        </PageContainer>
    );
};

OrdersPage.propTypes = {

};
