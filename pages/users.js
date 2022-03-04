import React from 'react';
import User from '../components/user';

const users = ({ users }) => {
    return (
        <div>
            <h1>User list</h1>
            {
                users.map(user => 
                    <div key={user.id}>
                       <User user={user} />
                    </div>
                )
            }
        </div>
    );
};

export default users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);


    return {
        props: {
            users: data
        }
    }
}