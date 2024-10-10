import React from 'react';
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper } from '@material-ui/core';
const data = [
  ["John Smith", "Mary Johnson", "David Davis", "Emily Brown", "Daniel Miller", "Olivia Wilson", "James Moore", "Emma Taylor", "William Anderson", "Sophia Martinez"],
  ["Michael Thomas", "Grace Jackson", "Christopher White", "Ava Harris", "Matthew Nelson", "Ella Thompson", "Andrew Baker", "Madison Clark", "Joseph Carter", "Lily Walker"],
  ["Nicholas Hall", "Abigail Mitchell", "Alexander King", "Samantha Garcia", "Benjamin Young", "Charlotte Evans", "Daniel Lee", "Chloe Wright", "David Hill", "Harper Murphy"],
  ["Samuel Adams", "Evelyn Turner", "Christopher Baker", "Scarlett Lewis", "Joseph Murphy", "Avery Coleman", "Ryan Allen", "Zoe Scott", "Brandon Ross", "Audrey Foster"],
  ["Isaac Wood", "Aria Green", "Nathan Moore", "Grace Miller", "Logan Harris", "Penelope Brown", "Caleb Martinez", "Hannah Reed", "Owen Hall", "Victoria Nelson"],
  ["Gabriel Garcia", "Aubrey King", "Elijah Thomas", "Brooklyn Taylor", "Mia Wilson", "Cooper Davis", "Addison Anderson", "Jackson Wright", "Amelia Clark", "Tyler Baker"]
  ];

const MyTable = () => {
return (
<TableContainer component={Paper}>
<Table>
<TableHead style={{backgroundColor:"#536dfe" , color:"white"}}>
<TableRow>
<TableCell style={{color:"white"}}>Group 1</TableCell>
<TableCell style={{color:"white"}}>Group 2</TableCell>
<TableCell style={{color:"white"}}>Group 3</TableCell>
<TableCell style={{color:"white"}}>Group 4</TableCell>
<TableCell style={{color:"white"}}>Group 5</TableCell>
<TableCell style={{color:"white"}}>Group 6</TableCell>
<TableCell style={{color:"white"}}>Group 7</TableCell>
<TableCell style={{color:"white"}}>Group 8</TableCell>
<TableCell style={{color:"white"}}>Group 9</TableCell>
<TableCell style={{color:"white"}}>Group </TableCell>


</TableRow>
</TableHead>
<TableBody>
{data.map((row, index) => (
<TableRow key={index}>
{row.map((name, i) => (
<TableCell key={i}>{name}</TableCell>
))}
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
};

export default MyTable;