import './App.css';
import Card from './idCard';
import LikeButton from './likeBtton';
import Random from './random';
function App() {
  return (
    <div className="App">
        <h1>
          idCards
        </h1>

       <Card 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <Card
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>
        Greetings
        </h1>
        {/* <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings> */}

        <h1>
        Random
        </h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>
        LikeButton
        </h1>
        <LikeButton /> <LikeButton />
        
   
        
    </div>
  );
}

export default App;
