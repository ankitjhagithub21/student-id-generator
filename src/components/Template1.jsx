import React from 'react';
import { Bus, Info, Grid } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Template1 = ({ student, cardRef }) => {
  return (
 
      <div className="max-w-[320px] w-full scale-100" ref={cardRef}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 text-white">
          <h2 className="text-lg font-bold text-center">STUDENT IDENTITY CARD</h2>
          <p className="text-xs text-center opacity-80">Academic Year 2023-2024</p>
        </div>

        {/* Photo and Basic Info */}
        <div className="flex p-5 gap-4 items-center">
          <img
            src={
              student.photo
                ? URL.createObjectURL(student?.photo)
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="student"
            className="w-24 h-24 object-cover object-center rounded-lg"
          />
          <div className="space-y-0.5">
            <h3 className="font-bold text-lg text-slate-900">{student.name}</h3>
            <div className="flex items-center text-sm text-slate-600">
              <span className="font-semibold mr-2">Roll No:</span>
              <span>{student.rollNumber}</span>
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <span className="font-semibold mr-2">Class:</span>
              <span>{student.classDivision}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mx-4"></div>

        {/* Additional Information */}
        <div className="p-4 space-y-3">
          <div className="flex items-start gap-2">
            <div className="bg-blue-100 p-1.5 rounded-md">
              <Info size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-slate-500">ALLERGIES</h4>
              <p className="text-sm text-slate-700">
                {student.allergies.length ? student.allergies.join(", ") : "No allergies reported"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="bg-amber-100 p-1.5 rounded-md">
              <Grid size={16} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-slate-500">RACK NUMBER</h4>
              <p className="text-sm text-slate-700">{student.rackNumber}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="bg-green-100 p-1.5 rounded-md">
              <Bus size={16} className="text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-slate-500">BUS ROUTE</h4>
              <p className="text-sm text-slate-700">{student.busRoute}</p>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="px-4 pb-4">
          <div className="flex justify-end">
            <div className="bg-white p-2 border rounded shadow-sm">
              <QRCodeSVG value={JSON.stringify(student)} size={64} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">
              <p>Valid until: May 31, 2024</p>
            </div>
            <div className="text-xs text-slate-500">
              <p>Springfield High School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Template1;
