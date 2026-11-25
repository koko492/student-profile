import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";

const students = [
  {
    id: 1,
    name: "precious",
    email: "precious22@gmail.com",
    department: "Accounting",
    level: "400",
    image: "https://i.pravatar.cc/150?img=1",
    status: "Active",
  },
  {
    id: 2,
    name: "Bella",
    email: "bella22@gmail.com",
    department: "Mathematics",
    level: "300",
    image: "https://i.pravatar.cc/150?img=2",
    status: "Active",
  },
  {
    id: 3,
    name: "vicky",
    email: "vicky22@gmail.com",
    department: "Physics",
    level: "200",
    image: "https://i.pravatar.cc/150?img=3",
    status: "Inactive",
  },
  {
    id: 4,
    name: "koko",
    email: "koko22@gmail.com",
    department: "accounting",
    level: "100",
    image: "https://i.pravatar.cc/150?img=4",
    status: "Pending",
  }

]

function App() {
  function handleViewProfile(name) {
  alert(name)
  }
  return (
    <div>
      <Navbar />
      <StudentList students={students} onViewProfile={handleViewProfile} />
      
    </div>
  )
}

export default App;