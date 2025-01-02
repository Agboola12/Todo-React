import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <>
            <div className="row my-2">
                <div className="col-lg-6 mx-auto">
                    <div className="text-decoration-none text-dark p-3 d-block border-radius-15 bg-light mb-3">
                        <h1 className="text-center">User List</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            <Link to={`/user/${user.id}`}>
                                                <button className="btn btn-success">
                                                    <i className="fa-solid fa-eye"></i>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Home;
