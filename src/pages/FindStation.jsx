import { stations } from '../data';
import { FaMapMarkerAlt, FaBolt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 
export default function FindStation() {
  const navigate = useNavigate();
 
  return (
    <div className="row g-4">
      <div className="col-lg-7">
        <div className="map-container shadow-sm">
          {stations.map(s => (
            <div key={s.id} className="map-pin" style={{ top: s.top, left: s.left }}>
              <FaBolt /> {s.available} Slots
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-5">
        <h5 className="fw-bold mb-3">Nearby Stations</h5>
        <div className="d-flex flex-column gap-3" style={{ maxHeight: '450px', overflowY: 'auto' }}>
          {stations.map(s => (
            <div className="card p-3 card-hover" key={s.id}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h6 className="fw-bold mb-0">{s.name}</h6>
                <span className={`badge ${s.available > 0 ? 'bg-success' : 'bg-danger'}`}>
                  {s.available > 0 ? `${s.available} Available` : 'Full'}
                </span>
              </div>
              <p className="small text-muted mb-2"><FaMapMarkerAlt /> {s.address}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="fw-bold text-primary">{s.price}</span>
                <button className="btn btn-sm btn-primary" disabled={s.available === 0} onClick={() => navigate('/booking')}>
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 