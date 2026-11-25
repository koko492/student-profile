function Navbar() {
  return (
    <nav className= "flex items-center justify-between bg-blue-900 px-6 py-3 text-white">
        <h2 className="text-xl font-bold">StudentHub</h2>
      <ul className="flex gap-6">
        <li><a href="/about">Home</a></li>
        <li><a href="/contact">Students</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;