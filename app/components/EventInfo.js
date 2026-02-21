import {
  COUPLE_NAME,
  GROOM_NAME,
  BRIDE_NAME,
  EVENT_DATE,
  EVENT_TIME,
  EVENT_LOCATION,
  EVENT_ADDRESS
} from "../utils/constants";

export default function EventInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Informasi Acara</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Couple Info */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-rose-700 font-script mb-6">{COUPLE_NAME}</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-amber-900 text-2xl">👨‍💼</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">{GROOM_NAME}</h4>
                <p className="text-gray-600">Putra pertama dari Bapak Budi & Ibu Ani</p>
              </div>

              <div className="text-4xl text-amber-500 font-serif">&</div>

              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-rose-700 text-2xl">👰‍♀️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">{BRIDE_NAME}</h4>
                <p className="text-gray-600">Putri kedua dari Bapak Joko & Ibu Maya</p>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-center text-amber-900 mb-6">Detail Acara</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <span className="text-amber-700 text-xl">📅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Tanggal</h4>
                    <p className="text-gray-600">{EVENT_DATE}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <span className="text-rose-700 text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Waktu</h4>
                    <p className="text-gray-600">{EVENT_TIME}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <span className="text-amber-700 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Lokasi</h4>
                    <p className="text-gray-600">{EVENT_LOCATION}</p>
                    <p className="text-gray-500 text-sm mt-1">{EVENT_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <span className="text-rose-700 text-xl">👔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Dress Code</h4>
                    <p className="text-gray-600">Warna pastel & formal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200">
              <p className="text-center text-gray-600">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
              </p>
              <p className="text-center text-amber-800 font-medium mt-2">(QS. Ar-Rum: 21)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}