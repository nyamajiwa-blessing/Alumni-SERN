import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";

const ViewEvent = () => {
  const location = useLocation();
  const [eventData, setEventData] = useState(null);
  const [participated, setParticipated] = useState(false);

  useEffect(() => {
    if (location.state && location.state.action === "view") {
      setEventData(location.state.data);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.data) {
      const eventId = location.state.data.id;
      const userId = localStorage.getItem("user_id");
      const requestData = {
        event_id: eventId,
        user_id: userId
      };

      axios.post("http://localhost:3000/auth/eventcommits/check", requestData)
        .then((res) => {
          console.log(res.data)
          setParticipated(res.data.eventCommit)
        })
        .catch((err) => console.log(err))
    }
  }, [location.state]);

  const handleParticipation = () => {
    const eventId = location.state.data.id;
    const userId = localStorage.getItem("user_id");
    const requestData = {
      event_id: eventId,
      user_id: userId
    };

    axios.post("http://localhost:3000/auth/events/participate", requestData)
      .then((res) => {
        setParticipated(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header className="masthead">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-4 align-self-end mb-4 pt-2 page-title">
              <h4 className="text-center text-white">
                {/* <b><?php echo ucwords($title) ?></b> */}
              </h4>
              <hr className="divider my-4" />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="col-lg-12">
          {eventData && (
            <div className="card mt-4 mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="text-center">{eventData.title}</h4>
                    <p><FaCalendar /> {eventData.schedule}</p>
                    <div dangerouslySetInnerHTML={{ __html: eventData.content }}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <hr className="divider" />
                    <div className="text-center">
                      {participated ? (
                        <span className="badge badge-primary">Committed to Participate</span>
                      ) : (
                        <button className="btn btn-primary" onClick={handleParticipation}>Participate</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewEvent;
