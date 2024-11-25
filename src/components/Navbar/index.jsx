function Navbar() {
  return (
    <div className="h-20 flex justify-between items-center w-full text-white px-8 md:px-40">
      <a href="/" className="text-3xl font-bold">Job Insight</a>
      <a
        href="https://fastcv.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        FastCV.com
      </a>
    </div>
  );
}

export default Navbar;
