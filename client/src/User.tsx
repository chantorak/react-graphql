// src/UsersList.js
import { gql, useQuery } from '@apollo/client';

// Define the GraphQL query
const GET_USERS = gql`
  query GetUsers {
    getUser(id: "1") {
      id
      name
      age
      address {
        street
        city
      }
    }
  }
`;

const UsersList = () => {
  // Execute the query with useQuery hook
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  return (
    <div>
      <h2>User List</h2>
      {data.getUser ? (
        <div>
          <h3>{data.getUser.name}</h3>
          <p>Age: {data.getUser.age}</p>
          <p>
            Address: {data.getUser.address.street}, {data.getUser.address.city}
          </p>
        </div>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UsersList;
