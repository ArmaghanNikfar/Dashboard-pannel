import {
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  Button,
  CircularProgress,
  TextField,
  useTheme,
  IconButton,
  Card,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  card: {
    width:"150px",
    display: "flex",
    flexDirection: "column",
    padding:"10px"
  },
}));

const RestForm = ({ setStatus }) => {
  const [file, setFile] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      sutableNoon: false,
      time: "ظهر",
      balance: false,
      emptyGroups: false,
      loginsShift: false,
      loginsResponsibility: false,
      offlineshift: false,
      offlinesResponsibility: false,
    },
  });

  /**
  * uploading file to server
  */
  const handleUpload = () => {
    // file upload
    // setBtnLoading(true)
    // axios.post().then(()=>{setBtnLoading(false)}).catch(()=>{setBtnLoading(false)})
  };

  return (
    <>
      <PageTitle title="Rest Time Layout" />
      <Grid container spacing={4} direction="column">
        <Grid item lg={6} md={12}>
          <Card disableWidgetMenu className={classes.card}>
            <Typography style={{fontSize:"19px" , marginBottom:"15px"}} color="primary">Shift Upload</Typography>
            <Grid container>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                component="label"
              >
                <Typography>Select File</Typography>

                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setFile(e.target.files[0]);
                  }}
                />
              </Button>
              {file ? (
                <>
                  <Typography style={{ marginRight: "5px" }}>
                    {file ? file.name : null}
                  </Typography>
                  <IconButton color="primary" onClick={() => setFile(null)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </>
              ) : null}
            </Grid>

            <Button
              variant="contained"
              size="small"
              color="primary"
              disabled={file ? false : true}
              style={{ marginTop: "20px" , width:"125px"}}
              onClick={handleUpload}
            >
              {btnLoading ? (
                <>
                  <Typography>Upload File</Typography>
                  <CircularProgress size={15} style={{ color: "white" }} />
                </>
              ) : (
                <Typography>Upload File</Typography>
              )}
            </Button>
          </Card>
        </Grid>
        <Grid item lg={6} md={12}>
          <Widget disableWidgetMenu upperTitle>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <FormControl
                  variant="outlined"
                  style={{
                    width: "150px",
                    direction: "ltr",
                    marginRight: "28px",
                  }}
                >
                  <InputLabel color="secondary" id="helper-lable">
                    <Typography>Meal</Typography>
                  </InputLabel>
                  <Select
                    color="secondary"
                    name="time"
                    labelId="helper-lable"
                    id="select"
                    value={formik.values.time}
                    label="time"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="ظهر">
                      <Typography>Lunch</Typography>
                    </MenuItem>
                    <MenuItem value="شب">
                      <Typography>Dinner</Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={formik.values.sutableNoon} />
                  }
                  label="Proper Rest for Noon Shift"
                  name="sutableNoon"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox checked={formik.values.balance} />}
                  label="Balancing Groups with Equal Number of Persons"
                  name="balance"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox checked={formik.values.balance} />}
                  label="Balancing Rest Groups"
                  name="balance"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={formik.values.emptyGroups} />
                  }
                  label="Display Empty Rest Groups"
                  name="emptyGroups"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={formik.values.loginsShift} />
                  }
                  label="Display Shift of Logged-in Individuals"
                  name="loginsShift"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik.values.loginsResponsibility}
                    />
                  }
                  label="Display Responsibility of Logged-in Individuals"
                  name="loginsResponsibility"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={formik.values.offlineshift} />
                  }
                  label="Display Shift of Logged-off Individuals"
                  name="offlineshift"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik.values.offlinesResponsibility}
                    />
                  }
                  label="Display Responsibility of Logged-off Individuals"
                  name="offlinesResponsibility"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  color="secondary"
                  style={{
                    width: "150px",
                    direction: "ltr",
                    marginRight: "28px",
                  }}
                  id="outlined-number"
                  label={<Typography>Free Capacity</Typography>}
                  type="number"
                />
              </Grid>
              <Grid item align="left">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setStatus("table");
                  }}
                >
                  {subLoading ? (
                    <>
                      <Typography>Confirm</Typography>
                      <CircularProgress
                        size={15}
                        style={{ color: "white" }}
                      />
                    </>
                  ) : (
                    <Typography>Confirm</Typography>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default RestForm;