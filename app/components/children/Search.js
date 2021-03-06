
// Include React
var React = require("react");

// Creating the Search component
var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      queryPartial: "",
      term: "",
      begin: 20170101,
      end: 20171231
    };
  },

  // This function will respond to the user input
  handleTermChange: function(event) {

    this.setState({ term: event.target.value });
    console.log("term in handleTermChange");
    console.log(this.state.term);
  },

  // This function will respond to the user input
  handleBeginChange: function(event) {

    this.setState({ begin: event.target.value });
    console.log("begin in handleBeginChange");
    console.log(this.state.begin);
  },
    // This function will respond to the user input
  handleEndChange: function(event) {

    this.setState({ end: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button


    var newQuery = "&q="+this.state.term+"&begin_date="+this.state.begin+"&end_date="+this.state.end;

    event.preventDefault();
    this.setState ({
      queryPartial: newQuery
    });

    this.props.setParent(newQuery);
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic</strong>
              </h4>
              <input
                type="text"
                onChange={this.handleTermChange}
                className="form-control text-left"
                id="term"
                required
              />
            <div className="row">
              <div className="col-md-6">
                 <h4 className="">
                      <strong>Start Date (YYYYMMDD)</strong>
                    </h4>
                    <input
                      value={this.state.begin}
                      onChange={this.handleBeginChange}
                      type="number"
                      className="form-control text-center"
                      id="begin"
                      required
                    />
               </div> 
               <div className="col-md-6">     
                <h4 className="">
                  <strong>End Date (YYYYMMDD)</strong>
                </h4>
                <input
                  value={this.state.end}
                  onChange={this.handleEndChange}
                  type="number"
                  className="form-control text-center"
                  id="end"
                  required
                />  
                </div> 
              </div>  

              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;

