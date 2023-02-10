import Nav from "./components/Nav";
import Main from "./components/Main";
import data from "./data";

function App() {

  const ele = data.map(function(item){
    return <Main
    name = {item.title} 
    image = {item.imageUrl} 
    founded = {item.startDate} 
    description= {item.description}
    />
  })
  return (
    <div >
      <Nav />
      {ele}
    </div>
  );
}

export default App;
