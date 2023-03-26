import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import Button from 'react-bootstrap/Button';

function renderRow(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Attribute name ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,

    },
}));
const CashflowStatement28 = () => {
    return (
        <Container style={{ height: 570, backgroundColor: "#f2f2f2", marginTop: 30 }}>
            <h4 style={{ color: "gray" }}>Master Database Setup</h4>
            <Grid container spacing={3}>
                <Grid item xs>
                     <Box sx={{ minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select>
                                <MenuItem value={10}>Cash Flow Statement</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    2
                </Grid>
                <Grid item xs>
                    2
                </Grid>
            </Grid>
            <Grid container style={{ height: 450, backgroundColor: "#cfcfcf", marginTop: 30 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={5}>
                    <h6>Formula Builder</h6>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                        <Grid item xs={6}>
                            <Card style={{ height: 300 }}>
                                <h6 style={{ backgroundColor: "#303030", color: "white", padding: 6 }}>Attributes</h6>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}

                                    /></Search>
                                <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }} >
                                    <FixedSizeList
                                        height={400}
                                        width={210}
                                        itemSize={46}
                                        itemCount={200}
                                        overscanCount={5}
                                    >
                                        {renderRow}
                                    </FixedSizeList>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card style={{ height: 300 }}>
                                <h6 style={{ backgroundColor: "#303030", color: "white", padding: 6 }}>Operations</h6>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}

                                    /></Search>
                                <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }} >
                                    <FixedSizeList
                                        height={400}
                                        width={210}
                                        itemSize={46}
                                        itemCount={200}
                                        overscanCount={5}
                                    >
                                        {renderRow}
                                    </FixedSizeList>
                                </Box>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={7}>
                    <h6>Formula Editor</h6>
                    <Grid xs={12}>
                        <Card style={{ padding: 15, height: 122, marginBottom: 30, marginRight: 30 }}>
                            <p>Quik Ratio=</p>
                            <Stack direction="row" spacing={2}>
                                <TextField style={{ width: 80 }}
                                    defaultValue="A1"
                                    size="small"
                                />
                                <TextField style={{ width: 40 }}
                                    defaultValue="/"
                                    size="small"
                                />
                                <TextField style={{ width: 100 }}
                                    defaultValue="A2"
                                    size="small"
                                />
                                <TextField style={{ width: 40 }}
                                    defaultValue="*"
                                    size="small"
                                /><TextField style={{ width: 60 }}
                                    defaultValue="100"
                                    size="small"
                                />
                                <TextField style={{ border: '1px dashed grey', fontSize: 6, width: 230 }}
                                    defaultValue="Seletc a metric/operator or input number"
                                    size="small"
                                /> </Stack>
                        </Card>
                        <h6>Preview</h6>
                        <Card style={{ color: "white", backgroundColor: "#303030", height: 122, paddingTop: 15, marginRight: 30 }}>
                            <h6 style={{ marginLeft: 180 }}>A1</h6>
                            <h6 style={{ marginLeft: 50 }}>EBITADA = _________________ * 100</h6>
                            <h6 style={{ marginLeft: 140 }}>Total Revenue</h6>
                        </Card>
                        <Grid
                            sx={{
                                // display: 'flex',
                                // flexDirection: 'row-reverse',
                                display: "flex",
                                justifyContent: "flex-end",
                                p: 1,
                                m: 4,
                            }}>
                            <button type="button" className="btn btn-edit" style={{ margin: 5, width: 100, color: "white", backgroundColor: "#303030", width: 120 }}>Edit</button>
                            <button type="button" className="btn btn-cancel" style={{ margin: 5, border: "1px solid #262626", fontWeight: "bold", color: "Black", width: 120, backgroundColor: "#d0d0d0" }}>Cancel</button>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>


        </Container>
    )
}

export default CashflowStatement28
