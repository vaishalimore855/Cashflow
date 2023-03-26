import './CM.css'
import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from "@mui/material"
import { Hr } from 'react-bootstrap-icons'
import { Box } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Button } from '@mui/material'
const CM58 = () => {
    return (
        <Container style={{ marginTop: 30, backgroundColor: "#f2f2f2", padding: "10px 5px",height:700 }}>
            <Typography variant="h5" component="h5" sx={{ color: "gray", marginBottom: 4,fontWeight:"bold" }}>
                Client Onboarding
            </Typography>
            <Grid container columns={12} sx={{ borderBottom: "2px solid gray" }} >
                <Grid item xs={3}>
                    <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                        Client Details & Inputs
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                        Group Companies Details & Inputs
                    </Typography>

                </Grid>
                <Grid item xs={2}>
                    <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                        Whitelableing
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                        Add users
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                        CFS Applicability

                    </Typography>
                </Grid>

            </Grid>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ marginTop: 5, backgroundColor: "#cfcfcf", padding: 2, borderRadius: "8px 8px" }}>
                <Box gridColumn="span 3">
                    <Typography variant="p" component={"p"} sx={{ fontWeight: "bold" }}>
                        Select Database table to configure

                    </Typography>
                </Box>
                <Box gridColumn="span 2">
                    <Box sx={{ minWidth: 50 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select sx={{ backgroundColor: "white" }}>
                                <MenuItem value={10}>Cash Flow</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box gridColumn="span 3">
                    <Typography variant="p" component={"p"} sx={{ fontWeight: "bold" }}>
                        Upload Document to Map

                    </Typography>
                </Box>
                <Box gridColumn="span 3">
                    <Typography variant="div" component={"div"} sx={{padding:1, fontSize: 14, backgroundColor: "white", border: "1px dotted black", borderRadius: "5px 5px" }}>
                        Drag and drop file or &nbsp;
                        <Button variant="contained" component="label" sx={{ backgroundColor: "#cfcfcf" }}>
                            Browse
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Typography>
                </Box>
                <Box gridColumn="span 1">
                    <Button variant="contained" component="label" sx={{textTransform:"capitalize",backgroundColor:"#303030"}}>
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}

export default CM58
