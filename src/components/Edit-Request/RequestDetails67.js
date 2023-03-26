import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import React from 'react'
import { Card } from '@mui/material'
import { CardContent } from '@material-ui/core'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'
import {InputAdornment} from '@mui/material'
import SubdirectoryArrowLeftSharpIcon from '@mui/icons-material/SubdirectoryArrowLeftSharp'
function RequestDetails67() {
  return (
    <Container style={{ marginTop: 30, backgroundColor: "#f2f2f2", padding: "10px 5px" }}>
      <Typography variant="h5" component="h5" sx={{ margin: "20px 3px" }}>
        Request Details
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 175, minHeight: 320 }}>
            <CardContent>
              <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                Request 1034560
              </Typography>
              <hr></hr>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={6}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Creation Date:
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Name:
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Database Type:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>

                      <Typography variant="p" sx={{ fontSize: 15, color: "gray" }} component="div">
                        13 May 2022
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, color: "gray" }} component="div">
                        Srishti Kulkarni
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, color: "gray" }} component="div">
                        Balance Sheet
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>

                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                    <Grid item xs={4}>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Due Date:
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Email:
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                        Edit Type:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>

                      <Typography variant="p" sx={{ fontSize: 16, color: "gray" }} component="div">
                        22nd Sept 2022
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 16, color: "gray" }} component="div">
                        Srishti.kulkarni@xyz.com
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: 16, color: "gray" }} component="div">
                        Move Line item
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant="p" sx={{ fontSize: 16, fontWeight: "bold", marginTop: 2 }} component="div">
                Line Item
              </Typography>
              <Typography variant="p" sx={{ fontSize: 16 }} component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </Typography>
              <Typography variant="p" sx={{ fontSize: 16, fontWeight: "bold", marginTop: 2 }} component="div">
                Details
              </Typography>
              <Typography variant="p" sx={{ fontSize: 16 }} component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 175, minHeight: 320 }}>
            <CardContent>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={7}>
                  <Typography variant="p" sx={{ fontSize: 15, fontWeight: "bold" }} component="div">
                    Request 1034560
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                      status
                    </Grid>
                    <Grid item xs={1} sx={{ float: "right" }}>
                      <Grid sx={{ backgroundColor: "#FFD580", marginTop: 1, height: "10px", width: "10px", borderRadius: "50% 50%" }}></Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ color: "#FFD580", marginLeft: 2 }}>
                      In Progress
                    </Grid>

                  </Grid>
                </Grid>

              </Grid>
              <hr></hr>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                  <Grid sx={{ backgroundColor: "#FF5733", height: "30px", width: "30px", borderRadius: "50% 50%", color: "white", textAlign: "center" }}>
                    PJ
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="p" sx={{ fontSize: 14 }} component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in ..
                  </Typography>
                </Grid>

              </Grid>
              
              <TextField 
               size="small" 
               InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SubdirectoryArrowLeftSharpIcon /><span style={{fontSize:13}}>Reply</span>
                  </InputAdornment>
                ),
              }} sx={{ marginTop: 12, width: "100%" }} />
            </CardContent>

          </Card>
          <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "end", marginTop: 3 }}>

            <Button sx={{ backgroundColor: "white", color: "black", border: "1px solid black", textTransform: "capitalize" }}>Re-Submit</Button>
            <Button sx={{ backgroundColor: "#262626", color: "white", textTransform: "capitalize" }}>Escalate</Button>
          </Stack>
        </Grid>

      </Grid>

    </Container>
  )
}

export default RequestDetails67
