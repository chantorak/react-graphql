import { gql, useQuery } from '@apollo/client';

// Define the GraphQL query
const GET_USERS = gql`
  query GetUsers {
    getUsers {
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
      {data.getUsers ? data.getUsers.map((user: any) => (
        <div>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
        </div>
      )) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UsersList;
