import test_data from "./test_data.json";
import DeploymentPlans from "./DeploymentPlans";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container fixed>
      <span align="center"><h2>Deployment Visualization</h2></span>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow className={"primaryRow"}>
              <TableCell/>
              <TableCell className={"fieldName"}>Deployment ID</TableCell>
              <TableCell className={"fieldName"}>Deployment Name</TableCell>
              <TableCell className={"fieldName"}>Creator</TableCell>
              <TableCell className={"fieldName"}>Created</TableCell>
              <TableCell className={"fieldName"}>Locked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test_data.deploymentPlans.map(deploymentPlans => {
              return <DeploymentPlans key = {deploymentPlans.id} {...deploymentPlans} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </div>
  );
}

export default App;
