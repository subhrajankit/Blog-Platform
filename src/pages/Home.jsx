import Navbar from "../components/Navbar"; // Import Navbar component

export default function Home() {
  // Dummy blog data
  const blogs = [
    { id: 1, title: "My First Blog", content: "This is my first blog post." },
    { id: 2, title: "Learning React", content: "React is awesome for building UIs." },
    { id: 3, title: "Tailwind CSS", content: "Tailwind makes styling super easy." },
  ];

  return (
    <div>
      <Navbar /> {/* Show navbar on top */}
      
      <div className="p-6 space-y-4">
        {blogs.map(blog => (
          <div key={blog.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="font-bold text-lg">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
