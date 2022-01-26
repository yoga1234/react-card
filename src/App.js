import CardContainer from "./components/CardContainer";
import userdata from "./data.json";
import "./App.css";

function App() {
  // userdata = userdata.userdata;
  // console.log(userdata.length);
  return (
    <div className="App">
      {userdata.userdata.map((user) => (
        <CardContainer
          key={user.id}
          name={user.name}
          nametag={user.nametag}
          biodesc={user.biodesc}
          profilepicture={user.profilepicture}
          headerbg={user.headerbg}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
