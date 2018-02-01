var VideoList = (props) => (
// <script>console.log('this')</script>
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video={video} />
    )}
  </div>
);
//<div><h5><em>title</em> <VideoListEntry data=props /> </h5></div>
//{exampleVideoData[0].snippet.title}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// VideoList.render() = {
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

