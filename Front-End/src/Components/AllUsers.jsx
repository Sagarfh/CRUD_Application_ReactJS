import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Service/api'
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        },
        row: {
            '& > *': {
                fontSize: 20
            },
        }
    }
})


const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();
    useEffect(() => {
            getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user.id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} 
                                component={Link} to={`/edit/${user._id}`}>Edit</Button>

                                <Button variant="contained" color="secondary" 
                                onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>

                    ))
                }
            </TableBody>
        </Table>

    );
}

export default AllUsers;