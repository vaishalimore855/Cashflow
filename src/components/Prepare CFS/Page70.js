import "./Prepare-CFS.css";
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from "@mui/material/colors";


const Page70 = () => {
    let i = 0;
    const [data, setData] = useState("");
    const [list, setList] = useState("");

    // console.log("List", list)
    // console.log("Show Table data", data);
    const [inputData, setInputData] = useState(false);
    useEffect(() => {

        const tableData = async () => {
            const response = await fetch("http://localhost:8000/prepare-CFS");
            // console.log("response", response)
            const jsonData = await response.json();
            // console.log("table data", jsonData)
            setData(jsonData);

        };

        tableData();

    }, []);
    const InputField = () => {
        setInputData(true);

    }


    return (
        <Container style={{ backgroundColor: "#f2f2f2" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 4 }}>
                <Grid item xs={7}>
                    <Typography variant="h5" component="h5">
                        XYZ Private Limited
                    </Typography>
                    <Typography variant="p" component="p" style={{ color: "gray" }}>
                        Statement of cash flows for the year ended March 31, 20XX
                    </Typography>
                    <Typography>
                        <Typography variant="a" component="a" sx={{ m: 1, color: "black", fontWeight: 600 }}>
                            Cash flow statement
                        </Typography>
                        <Typography variant="a" component="a" sx={{ color: "gray", fontWeight: 600 }}>
                            Cash flow statement
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={5} style={{ border: "1px solid black" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                        <Grid xs={3}>
                            <Typography variant="p" component="p" style={{ fontWeight: 500 }}>
                                Exchange Rate
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant="p" component="p">
                                Opening Rate
                            </Typography>
                        </Grid><Grid xs={3}>
                            <Typography variant="p" component="p">
                                Average Rate
                            </Typography>
                        </Grid><Grid xs={3}>
                            <Typography variant="p" component="p">
                                Closing Rate
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                        <Grid xs={3}>
                            <Typography variant="p" component="p" style={{ fontWeight: 500}}>
                                31-Mar-20

                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                        <Grid xs={3}>
                            <Typography variant="p" component="p" style={{ fontWeight: 500 }}>
                                31-Mar-19
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: "#D3D3D3" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Particulars</TableCell>
                            <TableCell sx={{ fontWeight: "bold",paddingLeft:"150px" }} colSpan={2}>31-Mar-20</TableCell>
                            <TableCell sx={{ fontWeight: "bold",paddingLeft:"160px"}}  colSpan={2}>31-Mar-19</TableCell>

                        </TableRow>
                        <TableRow sx={{ color: "#D3D3D3", textAlign: "center" }}>
                            <TableCell></TableCell>
                            <TableCell sx={{ align: "right" }}>Functional currency</TableCell>
                            <TableCell>Presentation currency</TableCell>
                            <TableCell>Functional currency</TableCell>
                            <TableCell>Presentation currency</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data &&
                            data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                > {
                                        <TableCell component="th" scope="row">
                                            
                                            {row.particularData &&
                                            console.log("particularData",row.particularData)
                                            // row.particularData.map((value) => <p style={{ paddingLeft: "10px",fontWeight:"bold" }} key={value.id}>{value.pData}</p>)
                                            }

                                            {<p style={{ paddingLeft: "30px" }}>{row.particulars}</p>}
                                           
                                            {row.perticularList &&
                                                row.perticularList.map((value) => <p style={{ paddingLeft: "50px" }} key={value.id}>{value.p}</p>)

                                            }
                                            {row.AdjustmetList &&
                                                row.AdjustmetList.map((value) => <p style={{ paddingLeft: "50px",paddingTop:"3px" }} key={value.id}>{value.list}</p>)

                                            }

                                        </TableCell>
                                    }
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Page70
