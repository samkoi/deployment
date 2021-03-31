import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

export default function Deployment(props){
  const actionLog = props.device.actionLog;
  return(       
    <Table size="small">
                  <TableHead>
                  <TableRow>
            <TableCell  colSpan={1} className={"deviceNameCell"}>
              <b>Device Name:</b>{props.device.name}
            </TableCell>
            <TableCell colSpan={2}>
              <b>Device ID:</b>{props.device.id}
            </TableCell>
            <TableCell colSpan={2}>
              <b>Device Description:</b>{props.device.description}
            </TableCell>
          </TableRow>
                     <TableRow className={"innerTableHead"}>
                        <TableCell>Software Components</TableCell>
                        <TableCell>Version</TableCell>
                        <TableCell>Executor</TableCell>
                        <TableCell>TimeStamp</TableCell>
                        <TableCell>Status</TableCell>
                     </TableRow>
                  </TableHead>
    <TableBody>
      
              {props.softwareComponents.map(softComponent =>{
                const installInfo = actionLog.find(action => 
                                (action.affectedSoftwareComponent.name === softComponent.name)&&
                                (action.affectedSoftwareComponent.version === softComponent.version))
                return(
                  < TableRow key={softComponent.externalId} className={"innerTableBody"}>
                    <TableCell>{softComponent.name}</TableCell>
                    <TableCell>{softComponent.version}</TableCell>
                    <TableCell>{installInfo ? installInfo.executor.name : "-"} </TableCell>
                    <TableCell>{installInfo ? installInfo.timestamp : "-"}</TableCell>
                    <TableCell>{installInfo ? "Installed" :"Not Installed" } 
                      {installInfo ?  <CheckCircleIcon color="primary"/> :<ReportProblemIcon color="primary"/> } </TableCell>

                  </ TableRow>
                )
              })} 
    </TableBody> 
    </Table>
  )
}