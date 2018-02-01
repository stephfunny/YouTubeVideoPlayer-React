class App extends React.Component {
  constructor(props) {
    //this.render();
    //console.log('test');
    super(props);
    this.state = {
      videos: [],
      currentVideo: props.videos[0], 
      search: null
    };
  }
  handleClick(e) {
    //console.log('testing', e.target);
    // console.log('test', e.target.getAttribute('data-reactid'));
    console.log('testing', e.target);


  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.state.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div onClick={this.handleClick} className="col-md-5">
            <VideoList videos={this.props.videos} onClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;