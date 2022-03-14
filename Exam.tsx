import react from 'react';
import { NavLink } from 'react-router-dom';

const Exam = () =>{
    return(
        <div className='container'>
            <h1>Exam</h1>
            <div className="add-btn" >
            <button className='add-button '>Add</button>
        </div>
            <table className="table border shadow">
             <thead className="thead-dark">
             <tr className="table-dark">
                            <th scope="col">Name</th>
                            <th scope="col">Organization</th>
                            <th scope="col">Access</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
            </table>

        </div>
    );
};
export default Exam;