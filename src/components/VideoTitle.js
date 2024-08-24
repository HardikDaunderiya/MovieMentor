

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute  bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <h3 className="py-6 text-lg w-1/4 text-white">{overview}</h3>
      <div >
        <button className="bg-gray-400 text-xl p-4 px-12 text-white bg-opacity-50 rounded-lg hover:bg-opacity-75"> ▶ Play</button>
        <button className="mx-2 bg-gray-400 text-xl p-4 px-12 text-white bg-opacity-50 rounded-lg hover:bg-opacity-75">ℹ️ More Info</button>
      </div>
    </div>

  )
}

export default VideoTitle
