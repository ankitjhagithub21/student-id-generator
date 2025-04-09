
import { QRCodeSVG } from "qrcode.react";


const Card = ({ downloadOldCard, index, card, ref }) => {
    return (
        <div className=" flex flex-col mx-auto" >

            <div ref={ref} className="p-5 bg-white shadow-lg rounded-lg overflow-hidden flex gap-2 items-center">
            <QRCodeSVG value={JSON.stringify(card)} size={100} />
              <div>
                  {/* Student Name */}
                  <h2 className="text-xl font-bold text-gray-800">{card.name}</h2>
                {/* Roll Number */}
                <p className="text-sm text-gray-500">Roll Number: {card.rollNumber}</p>
                {/* Bus Route */}
                <p className="text-sm text-gray-500">Bus Route: {card.busRoute}</p>

                <p className="text-sm text-gray-500">Rack Number : {card.rackNumber}</p>
                <p className="text-sm text-gray-500">Class : {card.classDivision}</p>

              </div>
                {/* QR Code */}

             

            </div>

            <button
                onClick={() => downloadOldCard(index, card.name)}
                className="mt-3 px-4 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Download This Card
            </button>
        </div>
    )
}

export default Card