import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.tsx';

const Home = () => {
  return (
    <div className="container">
      <header className="mb-5 text-center">
        <h1 className="display-5">Alex Wong Apps</h1>
        <p className="lead">Established 2018</p>
      </header>

      <Card
        colorClass='bg-cornhole'
        title="The Cornhole Scorer"
        image="/cornhole.jpeg"
        description="The best app for scoring and saving cornhole matches, otherwise known as beanbag toss."
        details={["The scoreboard can keep score for any game, including games with standard rule variations. All the user has to do is enter the bags’ locations and the app will calculate the new score automatically",
          "Matches can be saved locally or online, allowing users to view previous matches with round-by-round recaps", 
          "Online Leagues let users view matches across multiple devices and share matches with other users easily", 
          "All-time stats for each player are included, as well as stats during the day, week, month-to-date, and year-to-date", 
          "Core Data is used for local data storage and Firebase is used for online data storage"]}
        buttonInfos={[["App Store", "https://apps.apple.com/us/app/the-cornhole-scorer/id1417736054"]]}
      />

      <Card
        colorClass='bg-coryat'
        title="Coryat"
        image="/coryat.png"
        description="Play along with Jeopardy! and track your score."
        details={["Scoring is done with an easy-to-use scoring page, complete with category tracking", 
          "Once done, the user can edit the game if they messed up or share it on social media", 
          "The app includes comprehensive stats, including average game score and Daily Double performance", 
          "A one-time upgrade to Double Coryat includes unlimited game storage, more stats, graphs, and exporting"]}
        buttonInfos={[["App Store", "https://apps.apple.com/us/app/coryat-jeopardy-scorer/id1575111644"]]}
      />

      <Card
        colorClass='bg-transpose'
        title="InsTranspose"
        image="/instranspose.jpeg"
        description="Transpose notes between dozens of instruments."
        details={["The user selects two instruments and is provided with a note chart for easy transposition", "The user can also transpose between any interval", "The tuner feature can help the user tune their instruments and transpose the note if desired"]}
        buttonInfos={[["App Store", "https://apps.apple.com/us/app/instranspose/id1425224501"]]}
      />

      <Card
        colorClass='bg-math'
        title="Mental Math"
        image="/mentalmath.png"
        description="A fun, simple math game; follow the operations and get the right answer."
        details={["3 difficulty levels change the speed of the game", "Each game gets progressively harder, with larger answers and more operations", "Each game is randomly generated throughout gameplay", "Group Mode uses Bluetooth to allow users to compete against each other for the highest score"]}
        buttonInfos={[["App Store", "https://apps.apple.com/us/app/mental-math-quick-math-game/id1448312088"]]}
      />
    </div>
  );
};

export default Home;
