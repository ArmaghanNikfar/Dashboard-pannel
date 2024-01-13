import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  'ارسال شده': "success",
  'در انتظار': "warning",
  'رد شده': "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {/* {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))} */}
           <TableCell>نام</TableCell>
           <TableCell>ایمیل</TableCell>
           <TableCell>محصول</TableCell>
           <TableCell>قیمت</TableCell>
           <TableCell>تاریخ</TableCell>
           <TableCell>شهر</TableCell>
           <TableCell>وضعیت</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, email, product, price, date, city, status }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{product}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{city}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
