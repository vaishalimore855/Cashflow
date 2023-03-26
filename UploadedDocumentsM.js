import React from 'react'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/joy';
const UploadedDocumentsM = () => {
    return (
        <Container container spacing={3} className="mt-5 pb-3" style={{ backgroundColor: "#f2f2f2" }}>
            <h4 style={{ color: "gray" }}>Tata Group</h4>
            <Grid>
                <Grid sx={{
                    // display: "flex",
                    // justifyContent: "flex-start",
                    p: 1,
                }}><h6>Balance Sheet -</h6>
                    <p>March 31, 2022</p>
                    <button type="button" className="btn btn-edit" style={{ width: 100, color: "white", backgroundColor: "#303030", width: 120 }}>Edit</button>
                    <button type="button" className="btn btn-cancel" style={{ border: "1px solid #262626", fontWeight: "bold", color: "Black", width: 120, backgroundColor: "#d0d0d0" }}>Cancel</button>
                </Grid>
                
            </Grid>


        </Container>
    )
}

export default UploadedDocumentsM
