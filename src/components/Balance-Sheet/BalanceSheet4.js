// import * as React from 'react';
import "./BalanceSheet.css";
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/system";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MenuItem } from "@mui/material";
import { FormControl } from "@material-ui/core";
import { Select } from "@mui/joy";
import {InputLabel} from '@mui/material'
import { Box } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#e4e4e4",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function BalanceSheet4() {
    const [data, setData] = useState("");
    // console.log("Show Table data", data);
    const [inputData, setInputData] = useState(false);
    useEffect(() => {

        const tableData = async () => {
            const response = await fetch("http://localhost:8000/balance-sheet");
            console.log("response", response)
            const jsonData = await response.json();
            console.log("table data", jsonData)
            setData(jsonData);
        };

        tableData();

    }, []);
    const InputField = () => {
        setInputData(true);
    }

    return (

        <Container style={{ backgroundColor: "#f2f2f2" }}>
            <div className='row'>
                <h5 style={{ color: "gray" }}>Master Database Setup</h5>
                <div className='row justify-content-around' >

                    <div className='col-3 '>
                        <select ClassName="form-select form-select-md " aria-label=".form-select-sm example" style={{ height: 35, width: 180, borderRadius: 4 }}>
                            <option selected>Income Statement</option>
                            <option value="1">Other Operating Revenue</option>
                            <option value="2">Total Income</option>
                            <option value="3">Cost of Revenue</option>
                            <option value="4">Employees Benefit Expenses</option>
                            <option value="5">Other Expenses</option>
                            <option value="6">Total Operating Expenses</option>
                            <option value="7">EBITDA</option>
                            <option value="7">Depreciation and amortisation</option>
                        </select>
                      

                    </div>
                    <div className='col-sm-3'>
                        <FormGroup style={{ fontSize: 10 }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sort Manually" />
                        </FormGroup>
                    </div>
                    <div className='col-sm-3'>
                        <input className="form-control me-2 " type="search" placeholder="Search" style={{ height: 35, width: 140 }}></input></div>
                    <div className='col-sm-3  text-white pt-1  ' style={{ backgroundColor: "gray", height: 35, width: 150, borderRadius: 3 }}>
                        Add Line Item
                        <span style={{ marginLeft: 2 }}><AddCircleOutlineIcon></AddCircleOutlineIcon></span>
                    </div>

                </div>
            </div>

            <div className="row mt-3">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">

                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" >ID</StyledTableCell>
                                <StyledTableCell  ableCell align="left">Line Items</StyledTableCell>
                                <StyledTableCell align="left">Alternative Name&nbsp;&nbsp;</StyledTableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {data &&

                                data.map((rows) => (

                                    <StyledTableRow
                                        key={rows.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

                                        <TableCell component="th" scope="row" sx={{ width:10, textAlign: "center" }} >
                                            {rows.id}
                                        </TableCell>
                                        <TableCell align="left" style={{ width: 10 }} onClick={InputField}>
                                            {inputData ?
                                                <input sx={{ border: 1, width: 10, textAlign: "center" }}
                                                    id="outlined-required"
                                                    size="small"

                                                    defaultValue={rows.lineItems}
                                                />
                                                :
                                                <input sx={{ border: 1, width: 10, textAlign: "center" }}
                                                    id="outlined-required"
                                                    size="small"
                                                    disabled
                                                    defaultValue={rows.lineItems}
                                                />
                                            }
                                        </TableCell>
                                        <TableCell align="left" style={{ width: 10 }}>
                                            <input sx={{ border: 1, width: 10 }}
                                                id="outlined-required"
                                                size="small"
                                                defaultValue={rows.alternateName} />
                                        </TableCell>

                                    </StyledTableRow>
                                ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </Container>
    );
}





