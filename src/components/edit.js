import { useEffect } from "react";
import { allUsers } from "../data/users";

const Edit = () => {
  useEffect(() => {
    console.log(allUsers);
  });
  return (
    <>
      <div className="filters mt-10 mb-5">
        <h1 className="text-center text-xl font-bold">Filters</h1>
        <div className="flex justify-around">
          <InputBox id="archived" title="Archived" />
          <InputBox id="active" title="Active" />
          <InputBox id="timeZone" title="With Time Zone" />
        </div>
      </div>
      <div className="filters mt-10 mb-5">
        <h1 className="text-center text-xl font-bold">Sort by</h1>
        <div className="flex justify-around">
          <RadioBox id={"time"} title={"By Local Time"} />
          <RadioBox id={"name"} title={"Alphabetically"} />
        </div>
      </div>
      {allUsers.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
      Edit
    </>
  );
};

export default Edit;

const User = ({ user }) => {
  return <>{user.name}</>;
};

const InputBox = ({ id, title }) => {
  return (
    <div>
      <input type={"checkbox"} id={id} />
      <label className="mx-2" for={id}>
        {title}
      </label>
    </div>
  );
}

const RadioBox = ({ id, title }) => {
  return (
    <div>
      <input type={"radio"} id={id} />
      <label className="mx-2" for={id}>
        {title}
      </label>
    </div>
  );
};
