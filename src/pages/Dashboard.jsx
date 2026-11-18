import { Link } from 'react-router-dom';
import { FaBolt, FaCalendarCheck, FaBatteryFull, FaArrowRight } from 'react-icons/fa';
 
export default function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold">Charging Overview</h4>
        <p className="text-muted small">Monitor your EV status and bookings.</p>
      </div>
 
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card card-hover p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="bg-success bg-opacity-10 p-2 rounded text-success fs-5"><FaBatteryFull /></div>
              <span className="badge bg-success bg-opacity-25 text-success">Healthy</span>
            </div>
            <h6 className="text-muted small fw-bold mb-1">Battery Level</h6>
            <h3 className="fw-bold mb-0">78%</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-hover p-4">
             <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded text-primary fs-5"><FaCalendarCheck /></div>
            </div>
            <h6 className="text-muted small fw-bold mb-1">Active Bookings</h6>
            <h3 className="fw-bold mb-0">1</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-hover p-4">
             <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="bg-warning bg-opacity-10 p-2 rounded text-warning fs-5"><FaBolt /></div>
            </div>
            <h6 className="text-muted small fw-bold mb-1">Total Charged</h6>
            <h3 className="fw-bold mb-0">450 kWh</h3>
          </div>
        </div>
      </div>
 
      <div className="card p-4" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', border: 'none' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-2">Ready for your next trip?</h4>
            <p className="opacity-75 mb-0">Find the nearest fast charger and book your slot instantly.</p>
          </div>
          <Link to="/find" className="btn btn-light text-primary fw-bold px-4 py-2 d-none d-md-block">Find Station <FaArrowRight className="ms-2"/></Link>
        </div>
        <Link to="/find" className="btn btn-light text-primary fw-bold mt-3 d-md-none">Find Station</Link>
      </div>
    </div>
  );
}
 