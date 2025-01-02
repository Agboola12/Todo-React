import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>


            <div className="row my-5">
                <div className="col-lg-6 mx-auto">
                    <div className="text-decoration-none text-dark p-3 d-block border-radius-15 bg-light mb-3">
                        <h1 className="text-center">{user.name}'s Profile</h1>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="fw-bold">Email</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Phone</td>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Website</td>
                                    <td>{user.website}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Address</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            </tbody>
                            <Link to="/">
                                <button className="btn btn-success mt-3 w-50 p-2 fw-bold">Back to List</button>
                            </Link>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
