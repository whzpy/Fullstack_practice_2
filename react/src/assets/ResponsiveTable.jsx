import Table from 'react-bootstrap/Table';

const ResponsiveTable = ({ rows }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>userID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.userId}</td>
            <td>{row.title} + {row.title} + {row.title}</td>
            <td>{row.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveTable;