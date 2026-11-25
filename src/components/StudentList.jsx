import StudentCard from "./StudentCard";

function StudentList({ students, onViewProfile }) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    name={student.name}
                    email={student.email}
                    department={student.department}
                    level={student.level}
                    image={student.image}
                    status={student.status}
                    onViewProfile={onViewProfile}
                />
            ))}
        </div>
    );
}

export default StudentList;