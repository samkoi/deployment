import React from 'react';
import Deployment from './Deployment';
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

function DeploymentPlans(props) {
  const [open, setOpen] = React.useState(false);
   return (
    <React.Fragment>
      <TableRow className={"secondaryRow"}>
         <TableCell>
            <IconButton size="small" onClick={() =>setOpen(!open)}>
               {open ? <KeyboardArrowUpIcon color="primary"/>: <ExpandMoreRoundedIcon color="primary"/>}
            </IconButton>
         </TableCell>
         <TableCell component="th" scope="row">
            {props.id}
         </TableCell>
         <TableCell >{props.name}</TableCell>
         <TableCell >{props.creator.name}</TableCell>
         <TableCell >{props.created}</TableCell>
         <TableCell >{props.locked ? <LockIcon color="primary"/> : <LockOpenIcon color="primary"/>}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
         <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <p><b>Deployment Description: </b> {props.description}</p>             
                  {props.deployments.map(deployment => {
                     return <Deployment key={deployment.device.id} {...deployment}/>
                  })}              
            </Box>
         </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
   ) 
}

export default DeploymentPlans;