import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './users.scss';
import Axios from 'axios';

const columns = [
  { id: 'id', label: 'No.', minWidth: 80, },
  { id: 'name', label: '이름', minWidth: 170 },
  { id: 'email', label: '이메일', minWidth: 100 },
  {
    id: 'birthDay',
    label: '생년월일',
    minWidth: 170,
    align: 'right',
    //  format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'age',
    label: '나이',
    minWidth: 170,
    align: 'right',
    //  format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'password',
    label: '비밀번호',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'update',
    label: '수정',
    minWidth: 30,
    align: 'right',
  },
  {
    id: 'remove',
    label: '삭제',
    minWidth: 30,
    align: 'right',
  },
];



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 회원목록 가져오기
  const [users, setUsers] = useState([]);

  useEffect(() => {

    // 전체 회원목록 조회 호출
    Axios.get("/api/users")
      .then((res) => {
        let userArray = res.data;
        //console.log(userArray);
        setUsers(userArray);
      });

  }, []);

  // 회원 수정
  const handleUpdate = async user => {
    // 수정하려는 유저 아이디 ->해당 데이터 가져오기
    const { data } = await Axios.put("/api/users", user);
    console.log(data)
  }

  return (
    <Paper id="root">
      <div className="header">
        <h1>User List</h1>
        <p>회원 목록</p>
      </div>
      <TableContainer className="MuiPaper-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded">
        <div className="serchbar">
          <input type="text" />
          <button>조회</button>
        </div>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
              return (
                <TableRow tabIndex={-1} key={user.id}>
                  <td key={user.id}> {user.id} </td>
                  <td className={user.name}>{user.name}</td>
                  <td className={user.email}>{user.email}</td>
                  <td style={{ textAlign: 'right' }} className={user.birthDay}>{user.birthDay}</td>
                  <td style={{ textAlign: 'right' }} className={user.age}>{user.age}</td>
                  <td style={{ textAlign: 'right' }} className={user.password}>{user.password}</td>
                  <td><input type="button" value="수정" onClick={() => handleUpdate(user)} /></td>
                  <td><input type="button" value="삭제" /></td>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper >
  );
}