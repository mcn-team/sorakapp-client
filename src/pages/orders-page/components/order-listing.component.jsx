import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { Button, DataGrid } from '../../../components';
import { Authentication } from '../../../utils';
import { ROLES } from '../../../constants/user.constants';
import { BG_ELEVATED_01 } from '../../../constants/styles';

const columns = [
    {
        id: '_id',
        header: 'ID'
    },
    {
        id: 'clientName',
        header: 'Client',
        widthProportion: 4
    },
    {
        id: 'productName',
        header: 'Produit',
        widthProportion: 4
    },
    {
        id: 'createdAt',
        header: 'Date',
        render: (row, column) => moment(row[column.id]).format('LL'),
        widthProportion: 4
    },
    {
        id: 'productionOwner',
        header: 'Worker',
        widthProportion: 4,
        render: (row, column, actions) => {
            const role = Authentication.getRole() || 'WORKER'; //TODO: Remove mock

            if (!row[column.id] && role === ROLES.WORKER) {
                return (
                    <Button
                        onClick={() => actions.onRowClick(row, column.id)}
                    >
                        Prendre la commande
                    </Button>
                );
            }

            return row[column.id] || 'Aucune prise en charge';
        }

    },
    {
        id: 'deliveryOwner',
        header: 'Trader',
        widthProportion: 4,
        render: (row, column, actions) => {
            const role = Authentication.getRole() || 'WORKER'; //TODO: Remove mock

            if (!row[column.id] && role === ROLES.TRADER) {
                return (
                    <Button
                        onClick={() => actions.onRowClick(row, column.id)}
                    >
                        Prendre la commande
                    </Button>
                );
            }

            return row[column.id] || 'Aucune prise en charge';
        }
    }
];

export const OrderListing = styled(({ className, fetch }) => {
    const onRowClick = (row, id) => {
        console.log(row);
        console.log(id);
    };

    const [ data, setData ] = useState([]);

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            const orders = await fetch();

            if (!ignore) {
                setData(orders);
            }
        };

        fetchData();

        return () => {
            ignore = true;
        };
    }, [ data, fetch ]);

    return (
        <section className={className}>
            <DataGrid
                onRowClick={onRowClick}
                columns={columns}
                data={data}
            />
        </section>
    );
})`
  padding: 20px;
  background-color: ${BG_ELEVATED_01};
`;
