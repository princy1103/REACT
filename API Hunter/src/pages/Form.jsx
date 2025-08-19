import { adduser, getUsers, deleteUser, updateUser } from "../APIS/oprations";
import { useState, useEffect } from "react";

import React from 'react'

const Form = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateUser(editingId, formData);
            setEditingId(null);
        } else {
            await adduser(formData);
        }
        setFormData({ name: "", email: "" });
        fetchUsers();
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    const handleEdit = (user) => {
        setFormData({ name: user.name, email: user.email });
        setEditingId(user.id);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>{editingId ? "Update User" : "Add User"}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                />
                <button type="submit">
                    {editingId ? "Update User" : "Add User"}
                </button>
            </form>

            <h3>User Data</h3>
            <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <button onClick={() => handleEdit(u)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(u.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Form