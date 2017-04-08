class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: [],
    };

    this.renderVideo = this.renderVideo.bind(this);
  }

  componentDidMount() {
    this.setState({
      videos: 'ma',
    }, console.log(this.state.videos));
  }

  renderVideo(video) {
    this.setState({
      //FIX
      currentVideo: video,
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo ? this.state.currentVideo : exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList renderVideo={this.renderVideo} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
