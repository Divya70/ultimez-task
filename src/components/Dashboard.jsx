const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <table className="table-container">
        {userData && (
          <>
            <th>
              Email:<tr> {userData.name}</tr>
            </th>
            <th>
              UserName:<tr>{userData.userName}</tr>
            </th>
            <th>
              Country:<tr>{userData.country}</tr>
            </th>
            <th>
              Number:<tr> {userData.number}</tr>
            </th>
            <th>
              Email:<tr> {userData.email}</tr>
            </th>
            <th>
              Password:<tr> {userData.password}</tr>
            </th>
            <th>
              Referral ID:<tr>{userData.referral}</tr>
            </th>
          </>
        )}
      </table>
    </div>
  );
};

export default Dashboard;
