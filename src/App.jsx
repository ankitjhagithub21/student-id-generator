import { useState, useRef } from "react";
import StudentForm from "./components/StudentForm";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { toPng } from "html-to-image";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const initialData = {
    name: '',
    rollNumber: '',
    classDivision: '',
    allergies: [],
    photo: null,
    rackNumber: '',
    busRoute: '',
  };

  const [showCards, setShowCards] = useState(false);
  const [studentData, setStudentData] = useState(initialData);
  const [template, setTemplate] = useState(1);
  const [olderCards, setOlderCards] = useState(() => {
    return JSON.parse(localStorage.getItem('olderCards')) || [];
  });



  const cardRef = useRef(null);
  const oldCardRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

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

  const isFormValid = () => {
    return (
      studentData.name &&
      studentData.rollNumber &&
      studentData.classDivision &&
      studentData.rackNumber &&
      studentData.busRoute &&
      studentData.photo
    );
  };

  const downloadCard = async () => {
    if (!isFormValid()) {

      return
    };

    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = `${studentData.name}-IDCard.png`;
      link.href = dataUrl;
      link.click();
    }

    const updatedCards = [...olderCards, studentData];
    setOlderCards(updatedCards);
    localStorage.setItem('olderCards', JSON.stringify(updatedCards));
  };

  const downloadOldCard = async (index, name) => {
    const ref = oldCardRefs.current[index];
    if (ref) {
      const dataUrl = await toPng(ref);
      const link = document.createElement('a');
      link.download = `${name}-IDCard.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  const clearCard = () => {
    setStudentData(initialData);
  };

  return (
    <>
      <Navbar
        setTemplate={setTemplate}
        onDownload={downloadCard}
        onClear={clearCard}
        isDownloadDisabled={!isFormValid()}
        setShowCards={setShowCards}
      />

      {
        showCards ? <div className="grid md:grid-cols-4 md:grid-cols-2 grid-cols-1 min-h-screen py-10 px-5">

          {olderCards.length === 0 ? <p>No Card Found.</p> : olderCards.map((card, index) => (
            <Card key={index} index={index} downloadOldCard={downloadOldCard} card={card} ref={(el) => (oldCardRefs.current[index] = el)} />
          ))}
        </div> : <main className="px-5 min-h-screen py-10">
          <div className="max-w-4xl flex flex-wrap mx-auto gap-10">
            <StudentForm
              studentData={studentData}
              handleChange={handleChange}
              handleAllergyChange={handleAllergyChange}
              handlePhotoUpload={handlePhotoUpload}
            />

            {template === 1
              ? <Template1 student={studentData} cardRef={cardRef} />
              : <Template2 student={studentData} cardRef={cardRef} />
            }
          </div>
        </main>
      }



      <Footer />
    </>
  );
};

export default App;
