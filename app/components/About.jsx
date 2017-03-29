var React = require('react');



var About = (props) => {
    return(
    <div>
       <h1 className="text-center">About</h1>
        <p>This is a weather application build on React. Built on learning purpuses.</p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name.
            </li>
        </ul>
    </div>
    </div>
       
        )
};

module.exports = About;
