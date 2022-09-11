import './App.css';
import React from 'react';
import logo from './logo.png';
import cornholeIcon from './cornhole.jpeg';
import coryatIcon from './coryat.png';
import instransposeIcon from './instranspose.jpeg';
import mentalmathIcon from './mentalmath.png';

class AppCard extends React.Component {
    render() {
        return <div className="appCard" style={{ backgroundColor: this.props.color }}>
            <div className="cardHeader">
                <img className="cardImage" src={this.props.icon} />
                <div className="cardTitle">{this.props.name}
                </div>
                <div className="cardLinks"><a href={this.props.iosLink}>iOS</a>{this.props.androidLink && <a href={this.props.androidLink}>Android</a>}</div>
            </div>
            <div className="cardTagline">{this.props.tagline}</div>
            <div className="cardDescription">
                <ul>{this.props.descriptions.map((item) =>
                    <li>{item}</li>
                )}</ul>
            </div>
        </div>
    }
}

function App() {
    return (
        <div>
            <div className="header">
                <div>Alex Wong Apps</div>
                <div><img className="headerLogo" src={logo} /></div>
                <div>Established 2018</div>
            </div>
            <div className="cards">
                <div className="rowCards">
                    <AppCard name="The Cornhole Scorer" color="#FF7E78" icon={cornholeIcon} iosLink="https://apps.apple.com/us/app/the-cornhole-scorer/id1417736054" tagline="The best app for scoring and saving cornhole matches, otherwise known as beanbag toss." descriptions={["The scoreboard can keep score for any game, including games with standard rule variations. All the user has to do is enter the bags’ locations and the app will calculate the new score automatically", "Matches can be saved locally or online, allowing users to view previous matches with round-by-round recaps", "Online Leagues let users view matches across multiple devices and share matches with other users easily", "All-time stats for each player are included, as well as stats during the day, week, month-to-date, and year-to-date", "Core Data is used for local data storage and Firebase is used for online data storage"]} />
                    <AppCard name="Coryat" color="#83D0FF" icon={coryatIcon} iosLink="https://apps.apple.com/us/app/coryat-jeopardy-scorer/id1575111644" androidLink="https://play.google.com/store/apps/details?id=com.alexwongapps.coryat" tagline="Play along with Jeopardy! and track your score." descriptions={["Scoring is done with an easy-to-use scoring page, complete with category tracking", "Once done, the user can edit the game if they messed up or share it on social media", "The app includes comprehensive stats, including average game score and Daily Double performance", "A one-time upgrade to Double Coryat includes unlimited game storage, more stats, graphs, and exporting"]} />
                </div>
                <div className="rowCards">
                    <AppCard name="InsTranspose" color="#E1C699" icon={instransposeIcon} iosLink="https://apps.apple.com/us/app/instranspose/id1425224501" tagline="Transpose notes between dozens of instruments." descriptions={["The user selects two instruments and is provided with a note chart for easy transposition", "The user can also transpose between any interval", "The tuner feature can help the user tune their instruments and transpose the note if desired"]} />
                    <AppCard name="Mental Math" color="#AABAFF" icon={mentalmathIcon} iosLink="https://apps.apple.com/us/app/mental-math-quick-math-game/id1448312088" tagline="A fun, simple math game; follow the operations and get the right answer." descriptions={["3 difficulty levels change the speed of the game", "Each game gets progressively harder, with larger answers and more operations", "Each game is randomly generated throughout gameplay", "Group Mode uses Bluetooth to allow users to compete against each other for the highest score"]} />
                </div>
            </div>
        </div>
    );
}

export default App;
