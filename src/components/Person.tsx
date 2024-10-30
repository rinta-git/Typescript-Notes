import { PersonList } from "./PersonList";
import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  const personList = [
    {
      fname: "Nithin",
      lname: "KS",
    },
    {
      fname: "Nikhil",
      lname: "KS",
    },
    {
      fname: "Saji",
      lname: "K John",
    },
  ];
  return (
    <div>
      {props.person.fname} {props.person.lname}
      <PersonList names={personList} />
    </div>
  );
};
