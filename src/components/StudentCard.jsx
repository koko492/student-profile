function StudentCard({ name,email,department,level,image,status,onViewProfile }) {
   
   let statusClass;

   if (status === "Active") {
       statusClass = "bg-green-100 text-green-800";
   } else if (status === "Pending") {
       statusClass = "bg-orange-100 text-orange-800";
   } else {
       statusClass = "bg-red-100 text-red-800";
   }

    return (
        <div className="rounded-xl bg-white p-5 text-center shadow-md">
            <img src={image} alt={name} className="mx-auto h-24 w-24 rounded-full" />
            <h3 className="mt-3 text-lg font-bold">{name}</h3>
            <p className="text-gray-500">{email}</p>
            <p className="mt-1 text-sm">{department} - {level}</p>
          <p className={"mt-1 inline-block rounded-full px-3 py-1 text-sm font-medium " + statusClass}>
                {status}
            </p>
            <div>
            <button onClick={() => onViewProfile(name)}
             className="mt-3 rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-700">
                View Profile
            </button>
            </div>  
        </div>
    )
}

export default StudentCard;