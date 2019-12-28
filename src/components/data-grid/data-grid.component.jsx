import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexCell } from './flex-cell.component';
import { BG_ELEVATED_02 } from '../../constants/styles';

const FlexHeader = styled.header`
  display: flex;
  padding-bottom: 20px;
`;

const FlexRow = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`;

const DataGridContainer = styled.section`
  & > div:nth-child(even) {
    background-color: ${BG_ELEVATED_02};
  }
`;

export const DataGrid = ({ columns, data, onRowClick }) => {
    const actions = { onRowClick };

    return (
        <DataGridContainer>
            <FlexHeader>
                {
                    columns.map((column, index) => {
                        return (
                            <FlexCell
                                widthProportion={column.widthProportion}
                                maxWidth={column.maxWidth}
                                key={`flex-header-cell-${index}`}
                            >
                                {column.header}
                            </FlexCell>
                        );
                    })
                }
            </FlexHeader>
            {
                data.map((element, dataIndex) => {
                    return (
                        <FlexRow key={`flex-row-${dataIndex}`}>
                            {
                                columns.map((column, columnIndex) => {
                                    const value = element[column.id];
                                    const displayValue = column.render
                                        ? column.render(element, column, actions)
                                        : value && value.toString();

                                    return (
                                        <FlexCell
                                            widthProportion={column.widthProportion}
                                            maxWidth={column.maxWidth}
                                            key={`flex-body-cell-${columnIndex}`}
                                        >
                                            {displayValue}
                                        </FlexCell>
                                    );
                                })
                            }
                        </FlexRow>
                    );
                })
            }
        </DataGridContainer>
    );
};

DataGrid.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onRowClick: PropTypes.func
};

DataGrid.defaultProps = {
    onRowClick: () => {}
};
