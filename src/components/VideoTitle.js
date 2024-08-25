

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-20 absolute  bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold text-white w-1/4">{title}</h1>
      <h3 className="py-6 text-lg w-1/4 text-white">{overview}</h3>
      <div >
        <button className="bg-white text-xl p-3 px-10 text-black rounded-lg hover:bg-opacity-75"> ▶ Play</button>
        <button className="mx-2 bg-gray-400 text-xl p-3 px-10 text-white bg-opacity-40 rounded-lg hover:bg-opacity-75">ℹ️ More Info</button>
      </div>
    </div>

  )
}

export default VideoTitle
