var React = require('react');

var WeatherBox = React.createClass({
        onFormSubmit: function(e) {
            e.preventDefault();

            var location = this.refs.location.value;

            if (location.length > 0) {
                this.refs.location.value = '';
                this.props.onSearch(location);
            }
        },

    render: function () {
        return(       
        <div>
            <form onSubmit={this.onFormSubmit}> 
                <div>
                    <div>
                        <h2>Weather Component</h2>
                    </div>
               <input type="text" ref="location" placeholder="Enter city name"></input>
            </div>
            <div>
                <button>Get Weather</button>
            </div>
            </form>            
        </div>     
        
        );
    }
});

module.exports = WeatherBox;