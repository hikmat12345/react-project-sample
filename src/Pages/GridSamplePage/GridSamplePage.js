//libs
import React, { Children, useCallback, useEffect, useState } from "react"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
 import { ToastContainer } from "react-toastify";
 import { GridSamplePageActions } from "../../redux/actions/GridSamplePageActions";
import { TPContainer } from "../../components/TPContainer/TPContainer";
import "./GridSamplePage.scss"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { formatAMPM, getFileSrcFromPublicFolder } from "../../utils";

 function GridSamplePage({
  data, 
  error, 
  loading,
   GridSamplePageActions
}){
 
  useEffect(()=>{
    GridSamplePageActions()
  }, [])
 
     
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#173039",
        color: "#EBECEF", 
        // borderRight: "2px solid white",
        // borderWidth: "1px",
        // padding: "5px",
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: "#F6EBD3",
      },
      // hide last border
      '&:last-child td, &:last-child th': {
         border: 0,
      },
    }));
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 
    // pagination 
    const [dataPage, setDataPage] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
  
    useEffect(() => {
      setPage(page+1);
    }, [dataPage]);
  
    const onDataPageChange = (event, page) => setDataPage(page - 1);
  
   
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    console.log(data, 
      data?.result?.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),page, dataPage, 'data')
  return (
    <>
    <TPContainer className="tp-table-main-container">
     
    <TableContainer component={Paper} className="tp-table-container">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="tp-table-head">
          <TableRow>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>الإجراءات</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>تاريخ الإنشاء</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>الحالة</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>تاريخ الموعد</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>التصنيف</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>هاتف العميل</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>هاتف المحامى</StyledTableCell> 
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>اسم العميل</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>اسم المحامى</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>رقم</StyledTableCell>
            <StyledTableCell align="center"><span><img src={getFileSrcFromPublicFolder("arrow-icon.svg")} /></span>الكل</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && <h2>Loading</h2>}
          {!loading && (
          data?.result?.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <span className="tp-phone-icon"><img src={getFileSrcFromPublicFolder("phone-icon.svg")} /></span>
                <span className="tp-loading-icon"><img src={getFileSrcFromPublicFolder("setting.svg")} /></span>
              </StyledTableCell>
              <StyledTableCell align="center">{row.createdDate?.split("T")[0]}</StyledTableCell>
              <StyledTableCell align="center">{row.masterCategory?.arabicName}</StyledTableCell>
              <StyledTableCell align="center">{row.createdDate?.split("T")[0]} <span className="tp-notif-icon"><img src={getFileSrcFromPublicFolder("Notifcation-icon.svg")} /></span> {formatAMPM(row.createdDate?.split("T")[1].split(":")[0], row.createdDate?.split("T")[1].split(":")[1])}</StyledTableCell>
              <StyledTableCell align="center">{row.mobileRequestCategory?.arabicName}</StyledTableCell>
              <StyledTableCell align="center">{"558889472"}</StyledTableCell>
              <StyledTableCell align="center">{"558889472"}</StyledTableCell>
              <StyledTableCell align="center">{row.masterCategory?.arabicName}</StyledTableCell>
              <StyledTableCell align="center">{row.masterCategory?.arabicName}</StyledTableCell> 
              <StyledTableCell align="center">{row.priorityPrice}</StyledTableCell>
              <StyledTableCell align="center"><Checkbox {...label} /></StyledTableCell> 
            </StyledTableRow>
          )))}
        </TableBody>
      </Table>
   
        {/* pagination   */}
          <Stack spacing={2} className="tp-pagination"> 
            <Pagination
              count={Math.ceil(data?.result?.data?.length/rowsPerPage)}
              onChange={onDataPageChange}
              page={dataPage + 1}
            />
        </Stack>
      </TableContainer>
    </TPContainer> 
      <ToastContainer/> 
    </>
  );
};

const mapStateToProps = ({
 
  GridSamplePageReducer: { data,  error, loading,}, 
  
}) => ({
  data,  error, loading 
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      GridSamplePageActions, 
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GridSamplePage);
