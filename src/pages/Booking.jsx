import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
 
export default function Booking() {
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleBook = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBooked(true);
    }, 1500);
  };
 
  if (booked) {
    return (
      <div className="card p-5 text-center mx-auto" style={{ maxWidth: '500px', marginTop: '5vh' }}>
        <FaCheckCircle size={60} className="text-success mx-auto mb-3" />
        <h4 className="fw-bold">Booking Confirmed!</h4>
        <p className="text-muted">Your charging slot has been reserved. You can view it in your history.</p>
        <button className="btn btn-primary mt-3" onClick={() => setBooked(false)}>Book Another</button>
      </div>
    );
  }
 
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '600px' }}>
      <h5 className="fw-bold mb-4">Book Charging Slot</h5>
      <form onSubmit={handleBook}>
        <div className="mb-3">
          <label className="form-label small fw-bold">Select Station</label>
          <select className="form-select bg-transparent">
            <option>Tata Power EZ Charge - Indiranagar</option>
            <option>Ather Grid - HSR Layout</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-bold">Date</label>
            <input type="date" className="form-control bg-transparent" required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-bold">Time</label>
            <input type="time" className="form-control bg-transparent" required />
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label small fw-bold">Payment Method</label>
          <div className="d-flex gap-3">
            <div className="form-check border p-3 rounded flex-grow-1 border-secondary">
              <input className="form-check-input" type="radio" name="pay" id="upi" defaultChecked />
              <label className="form-check-label fw-medium" htmlFor="upi">UPI / GPay</label>
            </div>
            <div className="form-check border p-3 rounded flex-grow-1 border-secondary">
              <input className="form-check-input" type="radio" name="pay" id="card" />
              <label className="form-check-label fw-medium" htmlFor="card">Credit Card</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Processing Payment...' : 'Pay ₹300 & Book'}
        </button>
      </form>
    </div>
  );
}