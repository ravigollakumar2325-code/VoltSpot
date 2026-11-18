import { FaChargingStation, FaRupeeSign, FaStar } from 'react-icons/fa';
 
export default function OwnerDashboard() {
  return (
    <div>
      <h5 className="fw-bold mb-4">Station Owner Panel</h5>
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card p-4">
            <h6 className="text-muted small mb-2"><FaChargingStation /> Total Sessions</h6>
            <h3 className="fw-bold mb-0">1,248</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
            <h6 className="text-muted small mb-2"><FaRupeeSign /> Revenue (Month)</h6>
            <h3 className="fw-bold mb-0">₹84,520</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
            <h6 className="text-muted small mb-2"><FaStar /> Avg Rating</h6>
            <h3 className="fw-bold mb-0">4.8 / 5.0</h3>
          </div>
        </div>
      </div>
 
      <div className="card p-4">
        <h6 className="fw-bold mb-3">Recent Reviews</h6>
        <div className="border-bottom border-secondary pb-2 mb-2">
          <div className="fw-bold small">Rahul K. <span className="text-warning">★★★★★</span></div>
          <p className="small text-muted mb-0">"Super fast charging, very clean station!"</p>
        </div>
        <div>
          <div className="fw-bold small">Sneha M. <span className="text-warning">★★★★☆</span></div>
          <p className="small text-muted mb-0">"Had to wait 5 mins, but good experience overall."</p>
        </div>
      </div>
    </div>
  );
}
 