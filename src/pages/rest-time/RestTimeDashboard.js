import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  useTheme,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import RestForm from "./components/RestForm";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import RestTable from "./components/RestTable";
import Widget from "../../components/Widget/Widget";
import { useFormik } from "formik";
import { changeRestTime, getRest } from "../../services/http.services";
import { getAllNames } from "../../services/helpers";

const RestnameDashboard = () => {
  const [persons, setPersons] = useState();
  const [groups, setGroups] = useState();
  const [status, setStatus] = useState("form");
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      EmployeeId: "",
      date: "",
      group: "",
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    changeRestTime().then((response) => {
      formik.resetForm();
    });
  };
  useEffect(() => {
    getRest().then((response) => {
      const allNames = getAllNames(response.data);
      setPersons(allNames);
      setGroups(
        response.data.map((g) => {
          return g.Number;
        }),
      );
    });
  }, []);

  const changeRest = (
    <Grid lg={6} xs={12}>
      <Widget disableWidgetMenu>
        <form>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography style={{ marginBottom: "20px" }}>Shift Change:</Typography>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{
                    direction: "ltr",
                  }}
                >
                  <InputLabel color="secondary" id="helper-lable">
                    <Typography>Name</Typography>
                  </InputLabel>
                  <Select
                    color="secondary"
                    name="EmployeeId"
                    labelId="helper-lable"
                    id="select"
                    value={formik.values.EmployeeId}
                    label="EmployeeId"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">
                      <Typography>...</Typography>
                    </MenuItem>
                    {persons?.map((name) => {
                      return (
                        <MenuItem value={name.EmployeeId}>
                          <Typography>{name.LastName}</Typography>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{
                    direction: "ltr",
                  }}
                >
                  <InputLabel color="secondary" id="helper-lable">
                    <Typography>Group</Typography>
                  </InputLabel>
                  <Select
                    color="secondary"
                    name="group"
                    labelId="helper-lable"
                    id="select"
                    value={formik.values.group}
                    label="group"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">
                      <Typography>...</Typography>
                    </MenuItem>
                    {groups?.map((g) => {
                      return (
                        <MenuItem value={g}>
                          <Typography>{g}</Typography>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item align="left">
              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.warning.dark,
                  color: theme.palette.common.white,
                }}
                onClick={handleSubmit}
              >
                <Typography>Submit</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Widget>
    </Grid>
  );
  return (
    <>
      {status === "table" ? (
        <div>
          <Button
            onClick={() => {
              setStatus("form");
            }}
          >
            <ArrowForwardIcon />
            <Typography>Back</Typography>
          </Button>
        </div>
      ) : null}
      {status === "form" ? (
        <RestForm setStatus={setStatus} />
      ) : status === "table" ? (
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <RestTable />
          </Grid>

          <Grid item>{changeRest}</Grid>

          <Grid item align="left">
            <Button
              variant="contained"
              style={{
                backgroundColor: theme.palette.success.dark,
                color: theme.palette.common.white,
              }}
            >
              <Typography>Finalize</Typography>
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default RestnameDashboard;