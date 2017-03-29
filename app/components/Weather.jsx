var React = require('react');
var WeatherBox = require('WeatherBox');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoding: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({isLoding: true});

        openWeatherMap.getTemp (location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoding: false
            })
        }, function (errorMessage) {
            that.setState({
                isLoding: false
            })
            alert(errorMessage);
            
        });
    },
    render: function() {
        var{isLoding, temp, location} = this.state;

        function renderMessage () {
            if (isLoding) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        return(        
        <div>
            <WeatherBox onSearch={this.handleSearch}/>
            {renderMessage()}
        </div>    
        );
    }
});

module.exports = Weather;