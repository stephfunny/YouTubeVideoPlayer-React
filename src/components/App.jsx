class App extends React.Component {
  constructor(props) {
    //this.render();
    //console.log('test');
    super(props);
    this.state = {
      videos: [],
      currentVideo: props.videos[0], 
      search: null,
    };
  }

  // resetCurrentVideo(e, videoClicked) {
  //   console.log('handle click in app');

  // }

  myFunc(video) {
    //console.log(this.state.currentVideo);    
    // debugger;
    this.setState({
      currentVideo: video
    });
    // debugger;
    // console.log(video);
    console.log(this.state.currentVideo);
    this.render();
    //debugger;    
  }

  render() {
    //debugger;
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.state.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div onClick={this.resetCurrentVideo} className="col-md-5">
            <VideoList videos={this.props.videos} state={this.state.currentVideo} 
              callback={this.myFunc.bind(this)} />
          </div>
        </div>
      </div>
    );
  }


}

window.App = App;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// console.log('test', e.target.getAttribute('data-reactid'));
// console.log('testing', e.target);
//this.props.currentVideo = videoClicked;

// this.state.currentVideo = this.props.videos[4];
// console.log(this.props.videos[4]);
//onClick={this.resetCurrentVideo.bind(this)}