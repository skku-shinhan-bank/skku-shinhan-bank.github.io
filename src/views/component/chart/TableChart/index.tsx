import React, { FunctionComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Cell {
    name: string;
}

interface Props {
    head: Cell[];
    rows: Cell[][];
}

const TableChart: FunctionComponent<Props> = ({
    head, rows
}) => {
    return (
        <TableContainer component={Paper} style={{ maxHeight: '440px' }}>
            <Table style={{ minWidth: 650 }} aria-label="simple table" stickyHeader={true}>
                <TableHead>
                <TableRow>
                    {head.map((cell, index) => (
                        <TableCell component="th" scope="row" key={index}>
                            {cell.name}
                        </TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                        key={index}
                        // style={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {row.map((cell, index) => (
                            <TableCell component="th" scope="row" key={index}>
                                {cell.name}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TableChart;