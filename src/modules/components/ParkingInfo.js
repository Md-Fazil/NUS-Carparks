import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Element } from 'react-scroll'


const useStyles = makeStyles({
  table: {
    width: '80%',
    //marginLeft:150,
    //marginRight:150
   },
});

function createData(name, rate) {
  return { name, rate};
}

const rows = [
  createData('Monday to Friday (excluding Public Holidays)', '0830H – 1930H'),
  createData('Saturday (excluding Public Holidays)', '0830H – 1700H'),
  createData('Grace Period', '10 mins for all vehicles')

];

export default function SimpleTable() {
  const classes = useStyles();

  return (
  <div>
  <h2><strong>Operating Hours</strong></h2>

  <p style ={{fontSize:16}}>The pay parking operating hours are shown below:</p>
    
    <TableContainer style= {{width: 1200}}>
      <Table style ={{width: 1200}} className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style = {{align: "left", borderStyle: 'solid', backgroundColor: '#ff852e'}}>
              <span style = {{color: 'white'}}>DAYS</span>
              </TableCell>
            <TableCell style = {{align: "left", borderStyle: 'solid', backgroundColor: '#ff852e'}}>
              <span style = {{color: 'white'}}>PAY PARKING OPERATING HOURS</span>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >

            <TableCell style={{borderStyle: "solid" , fontSize: 14}}>Monday to Friday (excluding Public Holidays)</TableCell>
            <TableCell style={{borderStyle: "solid" , fontSize: 14}}>0830H – 1930H</TableCell>
          </TableRow>
          <TableRow >
            <TableCell style={{borderStyle: "solid" , fontSize: 14}}>Saturday (excluding Public Holidays)</TableCell>
            <TableCell style={{borderStyle: "solid" , fontSize: 14}}>0830H – 1700H</TableCell>
          </TableRow>
          <TableRow >
            <TableCell style={{borderStyle: "solid",  borderBottomColor: 'black', borderBottomWidth: 3, fontSize: 14}}>Grace Period</TableCell>
            <TableCell style={{borderStyle: "solid",  borderBottomColor: 'black', borderBottomWidth: 3, fontSize: 14}}>10 mins for all vehicles</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <h2><strong>Staff Season Car Parks</strong></h2>

    <p style ={{fontSize:16}}>Staff Season Car Parks are <strong>strictly</strong> for staff season holders.<strong>  </strong>A penalty surcharge of $0.0856 per minute will be imposed to non-staff season holders parking at these <br/>car parks. The vehicles are also subject to wheel-clamp for unauthorized parking. The unclamping fee is $107.00.</p>
    <br/>  
    <h2><strong>Visitors' Parking</strong></h2>

    <p style ={{fontSize:16}}>Visitors’ parking is available at car parks listed at Table 1. 
    The car parks are installed with automated parking system using Electronic Road Pricing (ERP) technology.<br/> 
    Car park access will be via in-vehicle unit (IU) identification for both season and short-term users.
    Visitors are reminded to park at the white lots as the red lots are <strong>strictly</strong><br/> for staff season holders. 
    The vehicles are subject to wheel-clamp for unauthorised parking if they are found parking at the red lots. 
    The unclamping fee is $107.00.</p>

    <p style ={{fontSize:16}}><strong><u>Table 1 - Car Parks for Visitors (WHITE LOTS only)</u></strong></p>

    <p>Please click the respective car parks for the location map.</p>




    <TableContainer style= {{width: 1200}}>
      <Table style = {{width: 1200}} className={classes.table} aria-label="simple table">
       
        <TableHead>
          <TableRow>
            <TableCell style = {{align: "left", borderStyle: 'solid', backgroundColor: '#ff852e'}}>
            <span style = {{color: 'white'}}>CAR PARK*</span>
            </TableCell>
            <TableCell style = {{align: "left", borderStyle: 'solid', backgroundColor: '#ff852e'}}>
            <span style = {{color: 'white'}}>MONDAY – FRIDAY</span>
            </TableCell>
            <TableCell style = {{align: "left", borderStyle: 'solid', backgroundColor: '#ff852e'}}>
            <span style = {{color: 'white'}}>SATURDAY</span>
            </TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
         
         <TableRow>
           <TableCell style={{borderStyle: "solid"}}>
             <a href = 'http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-1.pdf'>CP1</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-22A2b.pdf">CP 2</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-22A2b.pdf">CP 2A</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-22A2b.pdf">CP 2B</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-6B.pdf">CP 6B</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10A.pdf">CP 10A</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-11.pdf">CP 11</a>,<br/> 
             CP 11B, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-12B.pdf">CP 12B</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-15.pdf">CP 15</a>, 
             <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-16.pdf">CP 16</a>
           </TableCell>
           <TableCell style={{borderStyle: "solid"}}> 0830 to 1930: $0.0214 per minute</TableCell>
           <TableCell style={{borderStyle: "solid"}}> 0830 to 1700: $0.0214 per minute</TableCell>
         </TableRow>

         <TableRow>
            <TableCell style={{borderStyle: "solid"}}>
              <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3.pdf">CP 3</a>, 
              <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-3A.pdf">CP 3A</a>, 
              <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-10B.pdf">CP 10B</a>,
              </TableCell>
              <TableCell style={{borderStyle: "solid"}}>
              <p align="left">0830 to 1800: $0.0214 per minute<br />
              (capped at $2.568 per exit per day for registered NUS staff and students)</p>
              <p align="left">1801 to 1930: $0.0214 per minute</p>
              </TableCell >
              <TableCell style={{borderStyle: "solid"}}>
              <p align="left">0830 to 1700: $0.0214 per minute</p>
              </TableCell>
         </TableRow>

         <TableRow>
            <TableCell style={{borderStyle: "solid"}}>CP10V</TableCell>
            <TableCell style={{borderStyle: "solid"}}>0830 to 1930: $0.035 per minute</TableCell>
            <TableCell style={{borderStyle: "solid"}}>0830 to 1700: $0.035 per minute</TableCell>
         </TableRow>

         <TableRow>
           <TableCell style={{borderStyle: "solid",  borderBottomColor: 'black', borderBottomWidth: 3}}>
            <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-44A.pdf">CP 4</a>, 
            <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-5.pdf">CP 5</a>, 
            <a href="http://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Car-Park-SRC.pdf">Stephen Riady Centre Car Park</a>**
            <br/>
            <p>Free parking for visitors from 12.00pm to 2.00pm during University Vacation months of June, July and December</p>
            </TableCell>
            <TableCell style={{borderStyle: "solid",  borderBottomColor: 'black', borderBottomWidth: 3}}>0830 to 1930: $0.0214 per minute</TableCell>
            <TableCell style={{borderStyle: "solid",  borderBottomColor: 'black', borderBottomWidth: 3}}>0830 to 1700: $0.0214 per minute</TableCell>
         </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>

    <br/>

    <p>*Parking is free on Sundays and Public Holidays at all car parks<br />
       **Parking is free for NUS Orange label holders from Monday to Friday, 12.00 – 2.00pm.</p>
    <br></br>
     
    </div>

  );
}
