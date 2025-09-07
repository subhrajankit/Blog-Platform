import { Link } from "react-router-dom"; // Import Link to navigate between pages

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      {/* Left side: brand name */}
      <div className="font-bold text-xl">MyBlog</div>
      
      {/* Right side: navigation links */}
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
