import { initialHistory } from '../data';
 
export default function History() {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Charging History</h5>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Station</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {initialHistory.map(h => (
              <tr key={h.id}>
                <td className="fw-bold">{h.station}</td>
                <td>{h.date}</td>
                <td>{h.duration}</td>
                <td className="fw-bold text-success">{h.cost}</td>
                <td><span className="badge bg-success bg-opacity-25 text-success">{h.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 