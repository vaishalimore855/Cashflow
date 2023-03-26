import './UD.css'
import { Container } from '@mui/system'
import React from 'react'
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



const UD41 = () => {
    return (
        <Container className="mt-5 pb-3" style={{ backgroundColor: "#f2f2f2"}}>
            <div className='row'>
                <div className='col-12 mt-3'>
                    <h5 style={{ color: "gray" }}>TATA Group</h5>
                </div>
            </div>
            <div className="row">
                <div className='col-6 d-flex flex-row'>
                    <h6>Balance Sheet  -</h6>
                    <p style={{ color: "gray" }}>March 31, 2022</p>
                </div>
                <div className='col-6 d-flex flex-row d-flex flex-row-reverse'>
                    <button type="button" className="btn text-white" style={{backgroundColor:"gray"}}>Version <RestoreIcon></RestoreIcon></button>
                    <button type="button" className="btn text-white" style={{marginRight:20,backgroundColor:"gray"}}>Export <AudioFileOutlinedIcon></AudioFileOutlinedIcon></button>

                </div>
            </div>
            <div className='row mt-3 d-flex justify-content-between'>
                <div className='col-6 border'>
                    <div className='row' style={{ backgroundColor: "#d0d0d0", height: 40 }}>
                        <div className='col-6 mt-2'><b style={{ fontSize: 12 }}>Assets</b></div>
                        <div className='col-6 mt-2'><b style={{ float: "right", fontSize: 12 }}>Figures In 1000'S</b></div>
                    </div>
                    <div className='row mt-3' style={{ backgroundColor: "white" }}>
                        
                        <h6 className='mt-3'>Current Assets</h6>
                        <div className='col-6 mt-1 text-danger'>Cash and cash equivalents<ErrorOutlineIcon></ErrorOutlineIcon></div>
                        <div className='col-6 mt-1'><input type="text"></input></div>
                        <div className='col-6 mt-2'>Accounts receivabl</div>
                        <div className='col-6 mt-2'><input type="text" value="00000"></input></div>
                        <div className='col-6 mt-2'>Inventory</div>
                        <div className='col-6 mt-2 mb-2'><input type="text" value="00000"></input></div>
                        <hr></hr>
                        <div className='col-6'><h6>Total current assest</h6></div>
                        <div className='col-6 ' style={{ textAlign: "right" }}><h6>00000</h6></div>
                        <hr></hr>

                        <h6 className='mt-1'>Fixed assets</h6>
                        <div className='col-6 mt-1'><span style={{ color: "red" }}>Plants and machiner<ErrorOutlineIcon></ErrorOutlineIcon></span></div>
                        <div className='col-6 mt-1' style={{ textAlign: "right" }}><input type="text"></input></div>


                        <div className='col-6 mt-1'>Less decreciation</div>
                        <div className='col-6 mt-2' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>

                        <div className='col-6 mt-2'>Land</div>
                        <div className='col-6 mt-2 mb-1' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>

                        <div className='col-6 mt-2'>Intangible assets</div>
                        <div className='col-6 mt-2 mb-3' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>
                        <hr></hr>

                        <div className='col-6'><h6>Total current assest</h6></div>
                        <div className='col-6 ' style={{ textAlign: "right" }}><h6>00000</h6></div>

                     
                        <hr></hr>
                    </div>
                </div>

                <div className='col-6 border'>
                    <div className='row' style={{ backgroundColor: "#d0d0d0", height: 40,marginLeft:5 }}>
                        <div className='col-6 mt-2 d-flex justify-content-around'><b style={{ fontSize: 12 }}>Liabilities And Shareholders Equity</b></div>
                        <div className='col-6 mt-2 d-flex justify-content-around '><b style={{ fontSize: 12 }}>Figures In 1000'S</b></div>
                    </div>
                    <div className='row mt-3 second-card' style={{ backgroundColor: "white",marginLeft:5,height:480}}>
                        
                        <h6 className='mt-3'>Liabilities</h6>
                        <div className='col-6'>Accounts payable</div>
                        <div className='col-6' style={{ textAlign: "right" }}><input type="text"></input></div>
                        <div className='col-6'>Taxes payable</div>
                        <div className='col-6' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>
                        <div className='col-6'>Long-term bonds issued</div>
                        <div className='col-6' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>

                        <hr></hr>
                        <div className='col-6'>Total liabilities</div>
                        <div className='col-6 ' style={{ textAlign: "right" }}>00000</div>

                        <hr></hr>
                        <h6 >Shareholder's equity</h6>
                        <div className='col-6'><span style={{ color: "red" }}>Common stock<ErrorOutlineIcon></ErrorOutlineIcon></span></div>
                        <div className='col-6' style={{ textAlign: "right" }}><input type="text"></input></div>
                        <div className='col-6'>Retained earnings</div>
                        <div className='col-6' style={{ textAlign: "right" }}><input type="text" value="00000"></input></div>
                        <hr></hr>
                        <div className='col-6 pb-1'><h6>Total Shareholder's equity</h6></div>
                        <div className='col-6 ' style={{ textAlign: "right" }}><h6>00000</h6></div>
                        <hr></hr>
                        <div className='col-6'><h6>Liabilities And Shareholders Equity</h6></div>
                        <div className='col-6 ' style={{ textAlign: "right" }}><h6>00000</h6></div>
                    </div>
                    </div>
                <div className='col-12 mt-2  d-flex align-items-end flex-column'>
                    <button type="button" className="btn btn-secondary" style={{ backgroundColor: "#262626" }}>Save Changes</button>

                </div>
            </div>



        </Container>
    )
}

export default UD41
