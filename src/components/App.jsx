class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: [],
      search: 'rick astley'
    };

    this.renderVideo = this.renderVideo.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this._retrieveData = this._retrieveData.bind(this);
  }
  _retrieveData(data) {
    this.setState({
      videos: data,
    } /*() => { console.log('videos state: ', this.state.videos), this.renderVideo(data[0]); }*/);
    console.log('search state: ', this.state.search), this.renderVideo(data[0]);
  }

  handleSearchInput(searchInput) {
    this.setState({
      search: searchInput,
    }, window.debounceSearch({key: window.YOUTUBE_API_KEY, query: this.state.search, max: 5}, this._retrieveData));
  }

  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: this.state.search, max: 5}, this._retrieveData);
  }

  renderVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

  render() {
    return (
      <div>
        <Nav search={this.state.search} handleSearchInput={this.handleSearchInput}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo ? this.state.currentVideo : exampleVideoData[0]} />
        </div>
        <div className="col-md-5">
          <VideoList renderVideo={this.renderVideo} videos={this.state.videos} search={this.state.search}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
