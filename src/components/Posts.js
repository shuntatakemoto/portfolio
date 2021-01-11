import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import Moment from 'react-moment'

/*RSSParserのインスタンス生成*/
const RssParser = require('rss-parser');
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const url = CORS_PROXY + 'https://zenn.dev/shuntatakemoto/feed'
const rssParser = new RssParser();

class Posts extends Component {
  /*コンストラクターの定義*/
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  /*stateにrssParserの結果をバインド*/
  componentDidMount() {
    rssParser.parseURL(url)
      .then((feed) => {
        const data = feed.items;
        console.log(data);
        this.setState({
          contents: [...data]
        });
      })
      .catch((error) => {
        console.error('Get Failed', error);
      })
  }
  render(props) {
    const classes = this.props.classes;
    /*表示するコンテンツの形に合わせてstateの中身を書きだす(mapで拡張forループみたいに使う)*/
    const contents = this.state.contents.map(content => {
      return <div>
        {content.title}
        /*<Moment format="YYYY/MM/DD">{content.pubDate}</Moment>*/
       /*{content.link}*/
      </div>
    });
    return (
      <div className="Posts">
        <div className="posts-top-title">
            <h1>Posts</h1>
            <p>様々な媒体に投稿した記事を自動で集計して表示しています</p>
        </div>
        <header className="Posts-header">
          {contents}
        </header>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Posts;