function Navbar() {
  return (
    <div className="h-20 flex justify-between items-center w-full text-white px-8 md:px-40">
      <div className="text-3xl font-bold">JobPortal</div>
      <a
        href="https://minorclient.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Resume Builder
      </a>
    </div>
  );
}

export default Navbar;
