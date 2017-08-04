const React = require('react');

const Results = React.createClass({

    getInitialState: function () {

        return {

            title: "",
            date: "",
            url: ""

        }

    },

    clickToSave: function (result) {

        this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

    },


    render: function () {

        return (

            <div className="panel ResultPanel">

                <div className="panel-heading">

                    <h3 className="panel-title text-center bold">Articles</h3>

                </div>

                <div className="panel-body">

                    {this.state.results}

                </div>

            </div>

        );

    }

});

module.exports = Results;