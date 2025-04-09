import React from 'react';
import { Bus, Info, Grid } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Template2 = ({ student, cardRef }) => {
  return (

    <div className="w-[320px] scale-100" ref={cardRef}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 flex flex-col">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 py-3">
          <h2 className="text-lg font-bold text-center">Springfield High School</h2>
          <p className="text-sm text-center opacity-80">Student Identity Card</p>
        </div>

        {/* Student Photo */}
        <div className="flex flex-col items-center mt-4">
          <img
            src={
              student.photo
                ? URL.createObjectURL(student.photo)
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="student"
            className="w-28 h-28 object-cover rounded-full border-4 border-indigo-300 shadow"
          />
          <h3 className="mt-3 text-lg font-semibold text-slate-800">{student.name}</h3>
          <p className="text-sm text-slate-600">Roll No: {student.rollNumber}</p>
          <p className="text-sm text-slate-600">Class: {student.classDivision}</p>
        </div>

        {/* Info Section */}
        <div className="mt-4 px-5 space-y-3">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-blue-600 mt-1" />
            <div>
              <h4 className="text-xs font-semibold text-slate-500">Allergies</h4>
              <p className="text-sm text-slate-700">
                {student.allergies.length ? student.allergies.join(", ") : "No allergies reported"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Grid size={16} className="text-amber-600 mt-1" />
            <div>
              <h4 className="text-xs font-semibold text-slate-500">Rack Number</h4>
              <p className="text-sm text-slate-700">{student.rackNumber}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Bus size={16} className="text-green-600 mt-1" />
            <div>
              <h4 className="text-xs font-semibold text-slate-500">Bus Route</h4>
              <p className="text-sm text-slate-700">{student.busRoute}</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-5 flex justify-center">
          <div className="bg-white p-2 border rounded shadow-sm">
            <QRCodeSVG value={JSON.stringify(student)} size={64} />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 mt-5 px-4 py-3 border-t border-gray-400 text-xs text-slate-500 flex justify-between">
          <p>Valid till: May 31, 2024</p>
          <p>ID Verified</p>
        </div>
      </div>
    </div>

  );
};

export default Template2;
