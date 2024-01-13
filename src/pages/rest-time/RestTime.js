import { useState, useEffect } from "react";
import Widget from "../../components/Widget/Widget";

import {
  makeStyles,
  Typography,
  useTheme,
  MenuItem,
  Grid,
  Select,
  InputLabel,
  FormControl,
  Button,
  ListItem,
  MenuList
} from "@material-ui/core";

import RestTable from "./components/RestTable";
import { useFormik } from "formik";
import { getRest } from "../../services/http.services";
import { columnsDetector } from "../../services/helpers";

const useStyles = makeStyles((theme) => ({}));

const RestTime = () => {
  const [data, setData] = useState([]);
  const [colomns, setColumns] = useState();
  const[swap , setSwap] = useState([]);
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      group: "",
    },
  })
  useEffect(() => {
    getRest()
      .then((response) => {
        setData(response.data);
        console.log(data)
        setColumns(columnsDetector(response.data));
      });
    }, []);


  return (
    <>
    <RestTable/>
   
    </>
  )
};
export default RestTime;
