
const classes = ['10 A', '10 B', '11 A', '11 B'];
const allergiesOptions = ['Peanuts', 'Gluten', 'Lactose', 'Pollen', 'Dust'];
const busRoutes = ['Route 1', 'Route 2', 'Route 3', 'Route 4'];


const StudentForm = ({ studentData, handleChange, handleAllergyChange, handlePhotoUpload }) => {
  return (
    <div className="flex flex-col gap-5 p-5 md:w-1/2 w-full">
      <h2 className="text-xl">Enter Student Details</h2>
     
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          onChange={handlePhotoUpload}
         className="file-input file-input-primary w-full"
        />

      
      <input type="text" className="input w-full input-primary" name="name" value={studentData.name} onChange={handleChange} placeholder="Enter student name" />
      <input type="number" className="input w-full input-primary" placeholder="Enter student roll no" name="rollNumber" value={studentData.rollNumber} onChange={handleChange} />
      <select
        name="classDivision"
        value={studentData.classDivision}
        onChange={handleChange}
        required
        className="select select-primary w-full"
      >
        <option value="" disabled>Select Class & Division</option>
        {classes.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        name="busRoute"
        value={studentData.busRoute}
        onChange={handleChange}
        required
        className="select select-primary w-full"
      >
        <option value="" disabled>Select Bus Route</option>
        {busRoutes.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <input
        type="text"
        name="rackNumber"
        placeholder="Rack Number"
        value={studentData.rackNumber}
        onChange={handleChange}
        required
        className="input input-primary w-full"
      />

      <div className="flex flex-col">
        <label className="block mb-1">Allergies</label>
        <div className="flex flex-wrap gap-3">
          {allergiesOptions.map(allergy => (
            <label key={allergy} className="flex items-center gap-2">
              <input
                className="checkbox checkbox-primary"
                type="checkbox"
                value={allergy}
                onChange={handleAllergyChange}
                checked={studentData.allergies.includes(allergy)}
              />
              <span>{allergy}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentForm