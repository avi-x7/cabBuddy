const ContactDetails = ({ data }) => {
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Query</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="w=100">
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.userName}</td>
              <td>{item.userEmail}</td>
              <td>{item.message}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactDetails;
