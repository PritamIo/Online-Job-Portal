
function Navbar() {
  return (
    <div className='h-20 flex justify-between items-center w-full text-white px-8 md:px-40'>
        <div className='text-3xl font-bold'>JobPortal</div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <a href="https://minorclient.vercel.app/" target="_blank" rel="noopener noreferrer">Resume Builder</a>
        </button>
    </div>
  )
}

export default Navbar