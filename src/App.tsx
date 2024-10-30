import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Counter } from "./components/class/Counter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/CustomButton";
import { CustomInput } from "./components/html/CustomInput";
import { Input } from "./components/Input";
import { Person } from "./components/Person";
import { Text } from "./components/polymorphic/Text";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { Toast } from "./components/templateLitterals/Toast";
import { Title } from "./components/Title";

function App() {
  const name = {
    fname: "Rinta",
    lname: "Roy",
  };
  return (
    <div className="App">
      <Heading>My Heading</Heading>
      <Greet name="Rinta" isLoggedin={false} />
      <Person person={name} />
      <Status status="loading" />
      <Title>
        <Heading>The oscar goes to Mammootti</Heading>
      </Title>
      <Button handleClick={(e, id) => console.log("Button Clicked", e, id)} />
      <Input value="" />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter msg="Count is" />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["abc", "def", "ghi"]}
        eventHandler={(item) => console.log(item)}
      />
      <List items={[123, 34, 23]} eventHandler={(item) => console.log(item)} />
      <List
        items={[
          { id:123, first: "rinta", last: "roy" },
          { id:233, first: "nithin", last: "ks" },
        ]}
        eventHandler={(item) => console.log(item)}
      />
      <RandomNumber value={100} isPositive />
      <Toast position="centre-top" />
      <CustomButton variant="primary" onClick={() => console.log('Hey I have been clicked')}>Click Me</CustomButton>
      <CustomInput type="text" placeholder="enter something" />
      <Text as='h2' size="md">Heading</Text>
      <Text as='p' size="sm">Paragraph</Text>
      <Text as='label' htmlFor='textSample' size="md">Label</Text>
    </div>
  );
}

export default App;
