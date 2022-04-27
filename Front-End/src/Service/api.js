import axios from 'axios';


// const url = 'http://localhost:3500/users';
const url = 'http://localhost:4000/users';

export const getUsers = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async(user) => {
    return await axios.post(`${url}/add`, user);
}

export const editUser = async(id, user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}