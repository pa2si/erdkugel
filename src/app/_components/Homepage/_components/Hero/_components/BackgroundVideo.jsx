// components/BackgroundVideo.js
const BackgroundVideo = ({ videoSrc }) => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover z-[-1]"
        style={{ transform: 'scale(1.3)' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* White to transparent gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white to-gray-100 z-10"></div>
    </>
  );
};
export default BackgroundVideo;
