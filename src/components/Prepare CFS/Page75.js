import { Container } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import { Button } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { TextField } from '@mui/material'
import { InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material"
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import { MenuItem } from '@mui/material'
const Page75 = () => {
    return (
        <Container style={{ marginTop: 30, backgroundColor: "#f2f2f2", padding: "10px 5px" }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                        XYZ Private Limited
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "end" }}>

                        <TextField
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon /><span style={{ fontSize: 13 }}>Search</span>
                                    </InputAdornment>
                                ),
                            }} sx={{ width: 180 }} />
                        <Button sx={{ width: 180, backgroundColor: "gray", color: "white", textTransform: "capitalize" }}>Create new CFS &nbsp; <ControlPointIcon>   </ControlPointIcon>
                        </Button>
                    </Stack>

                </Grid>
            </Grid>
            <Typography variant="p" component="p">
                Create new Cash Flow statement
            </Typography>
            <Box sx={{ flexGrow: 1, border: "1px solid black", padding: "10px 8px", backgroundColor: "white", marginTop: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h6">
                            Yearly/Quarterly/Monthly
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h6">
                            Select Duration
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h6" component="h6">
                            Currency Rate
                        </Typography>

                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>

                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={3}>

                        <Box sx={{ minWidth: 120 }} size="small">

                            <FormControl fullWidth>
                                {/* <InputLabel>Yearly</InputLabel> */}
                                <Select>
                                    <MenuItem value={10}>Yearly</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>

                        <Box sx={{ minWidth: 120 }} size="small">

                            <FormControl fullWidth>

                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>

                        <Box sx={{ minWidth: 120 }} size="small">

                            <FormControl fullWidth>
                                {/* <InputLabel>Type here</InputLabel> */}
                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Type here</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>

                        <Box sx={{ minWidth: 120 }} size="small">

                            <InputLabel></InputLabel>
                            <FormControl fullWidth>

                                <Select>
                                    <MenuItem value={10}>2022-2023</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ minWidth: 120 }} size="small">
                            <Button sx={{ minWidth: 77,maxWidth:150, marginLeft: 3, backgroundColor: "#303030", color: "white", border: "1px solid black", textTransform: "capitalize" }}>Cancel</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </Container>
    )
}

export default Page75
