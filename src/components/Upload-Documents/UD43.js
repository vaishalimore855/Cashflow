import './UD.css';
import { Container } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import { TextField } from "@mui/material"
import { Button } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Link } from "@mui/material"
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
const UD43 = () => {
    return (
        <Container style={{ marginTop: 30, backgroundColor: "#f2f2f2", marginBottom: 10 }}>
            <h4 style={{ color: "gray" }}>Upload Documents</h4>
            <Grid container spacing={3}>
                <Grid item sx={{ mt: 2 }}>
                    <h6>Tata Steels</h6>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select>
                                <MenuItem value={10}>Associates: Tata xyzkljlkn</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{ border: "1px solid black", height: 500 }} sx={{ mt: 3, p: 5 }}>
                <Grid container spacing={3} sx={{ mb: 5, justifyContent: 'space-around' }}>
                    <Grid item xs={2}>
                        <h6>Type  </h6>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>Yearly/Quarterly/Monthly</h6>
                        <Box sx={{ minWidth: 120 }} size="small">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>Select duration</h6>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>Currency Rate</h6>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <h6>Currency Rate</h6>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Grid style={{ border: "1px dotted gray" }} sx={{
                    height: 250, display: "flex",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Grid>
                        <Typography variant="p" component="p" sx={{ marginLeft: 1 }}>
                            <DriveFolderUploadOutlinedIcon className='uploadIcon' style={{ color: "gray" }}></DriveFolderUploadOutlinedIcon>
                        </Typography>
                        <Typography variant="p" component="p" >
                            Drag and drop files here
                        </Typography>
                        <Typography variant="p" component="p" sx={{ marginLeft: 9 }}>
                            or
                        </Typography>
                        <Link href="#" style={{ marginLeft: 50, color: "black", fontSize: 18, fontWeight: "bold" }}>Browse</Link>
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: "flex-end", mt: 4 }}>
                    <Button className='uploadbtn' sx={{ bgcolor: "#303030", color: "white", width: 100 }}>Upload</Button>

                </Grid>
            </Grid>
        </Container>
    )
}

export default UD43
