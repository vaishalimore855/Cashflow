import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {
  MenuItem,
  Typography,
  TextField,
  Button,
  Box,
  Checkbox
} from '@material-ui/core';

function Page61() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const xyzData = async () => {
      const response = await fetch('http://localhost:8000/screen61');
      console.log('response', response);
      const jsonData = await response.json();
      console.log('table data', jsonData);
      setData(jsonData);
    };

    xyzData();
  }, []);

  return (
    <div
      style={{ padding: '15px', backgroundColor: '#f4f4f4', minHeight: '90vh' }}
    >
      <Typography sx={{ fontSize: '10px', color: 'grey' }} variant="subtitle2">
        Configuration  Client Requests
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box
          width="250px"
          marginRight="20px"
          marginTop="20px"
          marginBottom="15px"
        >
          <TextField
            label=""
            select
            // value={}
            open={true}
            size="small"
            onChange={() => console.log('hi')}
            fullWidth
            color="success"
          >
            <MenuItem value={'All Requests'}>All Requests</MenuItem>
            <MenuItem value={'Option Second'}>Option Second</MenuItem>
            <MenuItem value={'Option Third'}>Option Third</MenuItem>
            <MenuItem value={'Option Fourth'}>Option Fourth</MenuItem>
          </TextField>
        </Box>
        <TextField
          sx={{ width: '200px', py: '7px' }}
          id="input-with-icon-textfield"
          label=""
          size="small"
          border=" 1px solid black"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          variant="standard"
        />
      </Box>

      <Paper
        sx={{
          bgcolor: '#e4e4e4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          my: '15px',
          border: 'none'
        }}
        onClick={e => console.log('')}
      >
        <Box driection="column" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box width="12ch">
            <Typography variant="subtitle1">Request No.</Typography>
          </Box>
          <Box width="14ch">
            <Typography variant="subtitle1">Creation Date</Typography>
          </Box>
        </Box>
        <Box width="18ch">
          <Typography variant="subtitle1">Due Date</Typography>
        </Box>
        <Box width="30ch">
          <Typography variant="subtitle1">Client Name</Typography>
        </Box>
        <Box width="20ch">
          <Typography variant="subtitle1">Client Type</Typography>
        </Box>
        <Box width="20ch">
          <Typography variant="subtitle1">Reporter</Typography>
        </Box>
        <Box width="30ch">
          <Typography variant="subtitle1">Email ID</Typography>
        </Box>
        <Box width="22ch">
          <Typography variant="subtitle1">Request Type</Typography>
        </Box>
        <Box width="20ch">
          <Typography variant="subtitle1">Status</Typography>
        </Box>
      </Paper>

      {data.map((item, index) => {
        return (
          <>
            <Paper
              sx={{
                bgcolor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                my: '15px',
                border: 'none'
              }}
              onClick={e => console.log('')}
            >
              <Box
                driection="column"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Box width="12ch">
                  <Typography variant="subtitle2">{item.rno}</Typography>
                </Box>
                <Box width="13ch">
                  <Typography variant="subtitle2">{item.crdate}</Typography>
                </Box>
              </Box>
              <Box width="18ch">
                <Typography variant="subtitle2">{item.duedate}</Typography>
              </Box>
              <Box width="30ch">
                <Typography variant="subtitle2">{item.cname}</Typography>
              </Box>
              <Box width="20ch">
                <Typography variant="subtitle1">{item.ctype}</Typography>
              </Box>
              <Box width="20ch">
                <Typography variant="subtitle2">{item.rep}</Typography>
              </Box>
              <Box width="30ch">
                <Typography variant="subtitle2">{item.email}</Typography>
              </Box>
              <Box width="22ch">
                <Typography variant="subtitle2">{item.reqtype}</Typography>
              </Box>
              <Box width="20ch">
                {item.stat === 'New' ? (
                  <Typography style={{color:"violet"}} variant="subtitle2">
                    {item.stat}
                  </Typography>
                ) : item.stat === 'In Progress' ? (
                  <Typography  style={{color:"yellow"}}  variant="subtitle2">
                    {' '}
                    {item.stat}
                  </Typography>
                ) : item.stat === 'Completed' ? (
                  <Typography      style={{color:"green"}} variant="subtitle2" >
                    {' '}
                    {item.stat}
                  </Typography>
                ) : (
                  <Typography    style={{color:"red"}} variant="subtitle2">
                    {item.stat}
                  </Typography>
                )}
              </Box>
            </Paper>
          </>
        );
      })}
    </div>
  );
}

export default Page61;
