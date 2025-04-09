import { useState } from "react"
import StudentForm from "./components/StudentForm"
import Template1 from "./components/Template1"
import "./App.css"
import { useRef } from "react"
import { toPng } from "html-to-image"
import Template2 from "./components/Template2"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  const initialData = {
    name: '',
    rollNumber: '',
    classDivision: '',
    allergies: [],
    photo: null,
    rackNumber: '',
    busRoute: '',
  }
  const [studentData, setStudentData] = useState(initialData)
  const [template, setTemplate] = useState(1);
  const cardRef = useRef(null);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    })
  }

  const handleAllergyChange = (e) => {
    const { value, checked } = e.target;
    setStudentData(prev => ({
      ...prev,
      allergies: checked
        ? [...prev.allergies, value]
        : prev.allergies.filter(a => a !== value),
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudentData(prev => ({ ...prev, photo: file }));

    }
  };

  const downloadCard = async () => {
    if (!studentData.name) return;
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = `${studentData.name}-IDCard.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  const clearCard = async () => {
    setStudentData(initialData)
  }



  return (
    <>
      <Navbar setTemplate={setTemplate} onDownload={downloadCard} onClear={clearCard}/>
      <main className="px-5 min-h-screen py-10">

        <div className="max-w-4xl  mx-auto flex flex-wrap ">
          <StudentForm studentData={studentData} handleChange={handleChange} handleAllergyChange={handleAllergyChange} handlePhotoUpload={handlePhotoUpload} />
          {
            template === 1 ? <Template1 student={studentData} cardRef={cardRef} /> : <Template2 student={studentData} cardRef={cardRef} />
          }
        </div>


      </main>
      <Footer/>
    </>
  )
}

export default App