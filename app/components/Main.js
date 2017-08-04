var React = require('react');

var axios = require('axios');

var Form = require('./Children/Form');

var Results = require('./Children/Results');

var Saved = require('./Children/Saved');

var helpers = require('./utils/helper.js');

var Main = React.createClass({

    getInitialState: function () {

        return {

            topic: "",
            startYear: "",
            endYear: "",
            results: [],
            savedArticles: []

        }

    },

    setTerm: function (topic, start, end) {

        this.setState({

            topic: topic,
            startYear: start,
            endYear: end

        })

    },

    saveArticle: function (title, date, url) {

        helpers.postArticle(title, date, url);

        this.getArticle();

    },

    deleteArticle: function (article) {

        console.log(article);

        axios.delete('/api/saved/' + article._id)
            
            .then(function (response) {

                this.setState({

                    savedArticles: response.data

                });

                return response;

            }.bind(this));

        this.getArticle();

    },

    getArticle: function () {

        axios.get('/api/saved')

            .then(function (response) {

                this.setState({

                    savedArticles: response.data

                });

            }.bind(this));

    },

    render: function () {

        return (

            <div className="container">

                <div className="row">

                    <div className="jumbotron">

                        <h2 className="text-center">New York Times Article Scraper</h2>

                        <br/>

                        <p className="text-center">Scrape and Save your articles with ease!</p>

                    </div>

                </div>

                <div className="row">

                    <Form setTerm={this.setTerm} />

                </div>

                <div className="row">

                    <Results results={this.state.results} saveArticle={this.saveArticle} />

                </div>

                <div className="row">

                    <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle} />

                </div>

            </div>

        );

    }

});

module.exports = Main;