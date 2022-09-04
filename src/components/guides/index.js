import { Link, Router, Routes, Route, useParams,Outlet } from "react-router-dom";
import { events } from "../../data";

const Guides = () => {
  return (
    <Router>
      <div className="m-5">
        <h1 className="text-xl font-bold">
          This section has guides and tips for the various events and parts of
          the game.
        </h1>
        <p className="text-lg mx-2">
          Guides are a subject to change anytime and are super dynamic. Don't
          hesitate to report something that is wrong or to suggest a
          correction/addition.
        </p>
      </div>
      <div className="grid grid-cols-4 ">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
      <Outlet />
    </Router>
  );
};

export default Guides;

const Event = (props) => {
  const { event } = props;
  console.log("event", event);
  return (
    <div className="min-w-1/4">
      <Link>
        <p>{event.id} </p>
        {event.name}
      </Link>
    </div>
  );
};

const Quiz = () => {
  const params = useParams();
  return <h1>Quiz {params.eventId}</h1>;
};
