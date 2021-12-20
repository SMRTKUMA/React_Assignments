import React, { useState } from 'react';

function App() {
    const [users] = useState([
        { id: 1, firstName: 'Abc', lastName: 'mnbb', job: 'Janitor' },
        { id: 2, firstName: 'Xyz', lastName: 'ddd', job: 'Bouncer'  },
        { id: 3, firstName: 'kyk', lastName: 'Jdd', job: 'Actress' },
        { id: 4, firstName: 'qwe', lastName: 'fvb', job: 'Engineer'  },
        { id: 5, firstName: 'rty', lastName: 'cdffff', job: 'Bartender'}
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.job}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default App;