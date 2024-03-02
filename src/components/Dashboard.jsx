
const Dashboard = ({ userData }) => {
    return (
      <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Email: {userData.name}</p>
          <p>UserName: {userData.userName}</p>
          <p>Country: {userData.country}</p>
          <p>Number: {userData.number}</p>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
          <p>Referral ID: {userData.referral}</p>
         
        </div>
      )}
    </div>
    )
  }
  
  export default Dashboard