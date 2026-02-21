import { MAP_EMBED_URL, EVENT_LOCATION, EVENT_ADDRESS } from "../utils/constants";

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Lokasi Acara</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="h-96 lg:h-full">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Pernikahan"
                  className="filter grayscale-0"
                ></iframe>
              </div>

              {/* Location Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">{EVENT_LOCATION}</h3>
                  <p className="text-gray-600">{EVENT_ADDRESS}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <span className="text-amber-700">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Akses Kendaraan</h4>
                      <p className="text-gray-600 text-sm">Parkir tersedia di area gedung untuk 200 kendaraan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-rose-100 p-3 rounded-full mr-4">
                      <span className="text-rose-700">🚕</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Transportasi Umum</h4>
                      <p className="text-gray-600 text-sm">Dekat halte busway dan stasiun MRT (Stasiun Sudirman)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <span className="text-amber-700">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Kontak</h4>
                      <p className="text-gray-600 text-sm">Andi: 0812-3456-7890 | Sari: 0898-7654-3210</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-200">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(EVENT_ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span className="mr-2">Buka di Google Maps</span>
                    <span>📍</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}