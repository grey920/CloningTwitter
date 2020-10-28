import TablePagination from '@material-ui/core/TablePagination';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const columns = [
    {
        id: 'select',
        label: '선택',
        minWidth: 80,
    },
    { id: 'id', label: 'No.', minWidth: 80, format: (value) => value.toLocaleString('en-US'), },
    { id: 'name', label: '이름', minWidth: 80 },
    { id: 'email', label: '이메일', minWidth: 100 },
    {
        id: 'birthDay',
        label: '생년월일',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'age',
        label: '나이',
        minWidth: 80,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'password',
        label: '비밀번호',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },

];

const UserBody = (props) => {
    console.log(props.trigger)
    props.trigger(1)
    return (
        props.data.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((d) => (
            <tr key={d.id}>
                <td><input type="checkbox" value={d.id} /></td>
                <td className={d.id}> {d.id} </td>
                <td className={d.name}>{d.name}</td>
                <td className={d.email}>{d.email}</td>
                <td className={d.birthDay}>{d.birthDay}</td>
                <td style={{ textAlign: 'center' }} className={d.age}>{d.age}</td>
                <td style={{ textAlign: 'center' }} className={d.password}>{d.password}</td>
            </tr>
        ))

    )
}

export default function UserListTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // 페이징 처리
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // 한 페이지 당 보여줄 row 수
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [state, setState] = useState([]);
    const [trgger, setTrigger] = useState(0);

    useEffect(() => {
        Axios.get("/api/users")
            .then(data => {
                setState(data.data);
            })
    }, [trgger])

    return (
        <>
            <div className="body">
                <div className="head">
                    <h1>User List</h1>
                    <p>회원 목록</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <td key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <UserBody data={state} page={page} rowsPerPage={rowsPerPage} trigger={setTrigger} />
                    </tbody>
                </table>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={columns.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    );
}