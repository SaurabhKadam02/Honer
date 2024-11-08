import Card from "./Card";
function App() {
  console.log("hi");
  return (
    <div className="container">
      <Card
        imglink="https://ouch-cdn2.icons8.com/89MDbdjMXHfjAyqnO7r9Nu8v_YWFwnZJNtgHP51wO8M/rs:fit:384:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/LzYyMC9mNjBjYTU5/MC0zYjViLTQ1ODAt/OTY1Ni00OTM0NDNj/MmYyNDYucG5n.png"
        name="Icons8"
        description="This is cool website"
        buttontext="Know more"
      />
      <Card
        imglink="https://ouch-cdn2.icons8.com/89MDbdjMXHfjAyqnO7r9Nu8v_YWFwnZJNtgHP51wO8M/rs:fit:384:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/LzYyMC9mNjBjYTU5/MC0zYjViLTQ1ODAt/OTY1Ni00OTM0NDNj/MmYyNDYucG5n.png"
        name="Icons8"
        description="This is cool website"
        buttontext="Know more"
      />
      
      <Card description="hey there" action={() => alert("wow!")} />
    </div>
  );
}

export default App;
