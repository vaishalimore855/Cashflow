import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Container } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import Search from "@mui/icons-material/Search";
import {SearchIconWrapper} from '@mui/icons-material/Search'
export default function AuditLogs() {

    const [data, setData] = useState("");
    console.log("Show Table data", data);
    const [inputData, setInputData] = useState(false);
    useEffect(() => {

        const tableData = async () => {
            const response = await fetch("http://localhost:8000/audit-logs");
            console.log("response", response)
            const jsonData = await response.json();
            console.log("table data", jsonData)
            setData(jsonData);
            console.log(data)
        };

        tableData();

    }, []);
    const InputField = () => {
        setInputData(true);
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
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
    return (

        <Container style={{ backgroundColor: "#f2f2f2" }}>
            <div className='row'>
                <h5 style={{ color: "gray" }}>Audit Logs</h5>

                <div className='col-2 '>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select>
                                <MenuItem value={10}>Income Statement</MenuItem>
                                <MenuItem value={20}>Other Operating Revenue</MenuItem>
                                <MenuItem value={30}>Total Income</MenuItem>
                                <MenuItem value={10}>Cost of Revenue</MenuItem>
                                <MenuItem value={20}>Employees Benefit Expenses</MenuItem>
                                <MenuItem value={30}>Other Expenses</MenuItem>
                                <MenuItem value={10}>Total Operating Expenses</MenuItem>
                                <MenuItem value={20}>EBITDA</MenuItem>
                                <MenuItem value={30}>Depreciation and amortisation</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </div>
                <div className='col-8 '>
                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <p className='rounded' style={{ width: 150, height: 35, paddingLeft: 5, float: "left", border: "1px solid black" }}><SearchIcon></SearchIcon>Search</p>
                </div>
                <div className='col-2'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select>
                                <MenuItem value={10}>Sort</MenuItem>
                                <MenuItem value={20}>Sort Oldest to Newest</MenuItem>
                                <MenuItem value={30}>Sort Newest to Oldest</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </div>
            </div>
            <TableContainer className='mt-3' component={Paper}>
                <Table sx={{ minWidth: 768 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>Sr.No</StyledTableCell>
                            <StyledTableCell align="right">Line Item</StyledTableCell>
                            <StyledTableCell align="right">User Role</StyledTableCell>
                            <StyledTableCell align="right">User Name</StyledTableCell>
                            <StyledTableCell align="right">User Email</StyledTableCell>
                            <StyledTableCell align="right">Source Docs</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.lineItem}</StyledTableCell>
                                    <StyledTableCell align="left">{row.userRole}</StyledTableCell>
                                    <StyledTableCell align="left">{row.userName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.usereMail}</StyledTableCell>
                                    <StyledTableCell align="left">{row.sourceDocs}</StyledTableCell>
                                    <StyledTableCell align="left">{row.action}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>


    );
}