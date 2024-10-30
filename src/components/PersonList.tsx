import { Name } from "./Person.types";

interface personProps {
  names: Name[];
}

export const PersonList = (props: personProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.fname} {name.lname}
        </h2>
      ))}
    </div>
  );
};
