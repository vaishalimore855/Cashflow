import React from 'react'
import { Container } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';

const CashFlowStatement = () => {
  return (
    <Container className="mt-3"style={{ backgroundColor: "#d0d0d0", height: 450 }}>
      <div className='row'>
        <div className='col-6'>
          <h6 className='mt-4'>Formula Builder</h6>
          <div className="row">
            <div className="col-6">
              <div ClassName="card" style={{ backgroundColor: "white" }}>
                <div ClassName="card-header" style={{ backgroundColor: "#262626", height: 40, color: "white" }}>
                  <h6 className='p-2 mt-4'>Attributes</h6>
                </div>
                <div ClassName="card-body" style={{ marginLeft: 10 }}>

                  <h5 ClassName="card-title" style={{ color: "gray", marginTop: 8, fontSize: 16 }}>
                    <SearchIcon></SearchIcon>Serach

                  </h5>
                  <hr></hr>
                  <div className="list-group">
                    <p className="list-group-item" style={{ border: "none" }}>
                      Attribute Name
                    </p>
                    <p className="list-group-item">
                      Attribute Name
                    </p>
                    <p className="list-group-item">
                      Attribute Name
                    </p>
                    <p className="list-group-item">
                      Attribute Name
                    </p>
                    <p className="list-group-item">
                      Attribute Name
                    </p>
                    <p className="list-group-item">
                      Attribute Name
                    </p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-6">
              <div ClassName="card" style={{ backgroundColor: "white" }}>
                <div ClassName="card-header" style={{ backgroundColor: "#262626", height: 40, color: "white" }}>
                  <h6 className='p-2 mt-4'>Operations</h6>
                </div>
                <div ClassName="card-body" style={{ marginLeft: 10 }}>

                  <h5 ClassName="card-title" style={{ color: "gray", marginTop: 8, fontSize: 16 }}>
                    <SearchIcon></SearchIcon>Serach
                  </h5>
                  <hr></hr>
                  <div className="list-group" style={{ border: "none", height: 180 }}>
                    <p className="list-group-item">
                      ( Open bracket
                    </p>
                    <p className="list-group-item">
                      ) Closed bracket
                    </p>
                    <p className="list-group-item">
                      +  Add
                    </p>
                    <p className="list-group-item">
                      -  Subtract
                    </p>
                    <p className="list-group-item">
                      /  Divide
                    </p>
                    <p className="list-group-item">
                      *  Multiply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <h6 className='mt-4 '>Formula Editor</h6>
          <div className='row'>
            <div className='col-12 mt-4 rounded' style={{ height: 110, backgroundColor: "white" }}>
              <p className='mt-2'>Quik Ratio=</p>
              <div className='row mt-4'>

                <div className='col-1 m-1 border mb-4  '>A1</div>
                <div className='col-1 m-1 border mb-4'>/</div>
                <div className='col-2 m-1 border mb-4 '>A2</div>
                <div className='col-1 m-1 border mb-4 '>*</div>
                <div className='col-1 m-1 border mb-4 '>100</div>
                <div className='col-4 m-1  mb-4' style={{ border: '1px dashed grey',fontSize:9}}><p className='mt-2'>Select a metric/operator or input number</p></div>

              </div>
            </div>
            <h6 className='mt-4'>Preview</h6>
            <div className='col-12 mt-3 rounded' style={{ color: "white", height: 110, backgroundColor: "#262626" }}>

              <div className='row mt-4'>

                <div className='col-8' style={{ textAlign: "center" }} >A1</div>
                <div className='col-8' style={{ textAlign: "center" }}>EBITDA  =   ____________ x 100</div>
                <div className='col-8' style={{ textAlign: "center" }}>Total Revenue</div>

              </div>
            </div>
            <div className='row mt-4'>

              <div className="col-8" style={{alignItem:"center"}}>
                <button type="button" className="btn btn-cancel" style={{ float:"right",border: "1px solid #262626", fontWeight: "bold", color: "Black", width: 120, backgroundColor: "#d0d0d0" }}>Cancel</button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-edit" style={{ float:"right", width: 100, color: "white", backgroundColor: "#262626", width: 120 }}>Edit</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default CashFlowStatement
