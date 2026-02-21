"use client";

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are not set!');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir",
    guests: "1",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [dataMSG, setDataMSG] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    total: 0,
    totalPages: 0
  })

  useEffect(() => {
    fetchMessage()
  }, [pagination.page]);

  const fetchMessage = async () => {
    setLoadingMsg(true)
    let query = supabase
      .from("rsvp")
      .select("id, nama, pesan,kehadiran, created_at", { count: 'exact' })
      .not("pesan", "is", null)
      .order("created_at", { ascending: false });

    let { page, pageSize } = pagination
    let numberPage = page
    const from = (numberPage - 1) * pageSize;
    const to = from + pageSize - 1;

    query = query.range(from, to)

    const { data: result, error, count } = await query
    setDataMSG(result)
    setPagination(prev => ({
      ...prev,
      total: count || 0,
      totalPages: Math.ceil((count || 0) / prev.pageSize)
    }))
    setLoadingMsg(false)

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tampilkan notifikasi
    // setSubmitted(true);
    // setShowNotification(true);

    // Sembunyikan notifikasi setelah 3 detik
    // setTimeout(() => {
    //   setShowNotification(false);
    // }, 3000);

    setLoading(true);

    const form = e.target;

    const { error } = await supabase.from("rsvp").insert({
      nama: form.name.value,
      kehadiran: form.attendance.value === "hadir" ? "Hadir" : "Tidak Hadir",
      jumlah_tamu: form.guests.value,
      pesan: form.message.value,
    });


    setLoading(false);

    if (!error) {
      // setSuccess(true);
      // form.reset();
      // location.reload()
      form.reset()
      setPagination({
        page: 1,
        pageSize: 5,
        total: 0,
        totalPages: 0
      })
      setFormData({
        name: "",
        attendance: "hadir",
        guests: "1",
        message: ""
      });

      fetchMessage()
    }

  };

  const handlePageChange = async (numpage) => {
    setDataMSG([])
    setPagination(prev => ({ ...prev, page: numpage }));
  };

  // Render Pagination Component
  const PaginationButtons = () => {
    let { page, totalPages } = pagination;

    const renderPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;

      if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, page + 2);

        if (page <= 3) {
          end = maxVisible;
        } else if (page >= totalPages - 2) {
          start = totalPages - maxVisible + 1;
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        // Add ellipsis
        if (start > 1) pages.unshift('...');
        if (end < totalPages) pages.push('...');
      }

      return pages;
    };

    return (
      <div className="flex items-center justify-center mt-8">

        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1 || loading}
            className="px-3 py-2 rounded-lg border disabled:opacity-50 hover:bg-gray-50"
          >
            ←
          </button>

          {renderPageNumbers().map((pageNum, idx) => (
            pageNum === '...' ? (
              <span key={`ellipsis-${idx}`} className="px-2">...</span>
            ) : (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={loading}
                className={`px-4 py-2 rounded-lg transition-all ${page === pageNum
                  ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white'
                  : 'border hover:bg-gray-50'
                  }`}
              >
                {pageNum}
              </button>
            )
          ))}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages || loading}
            className="px-3 py-2 rounded-lg border disabled:opacity-50 hover:bg-gray-50"
          >
            →
          </button>
        </div>

      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-amber-50" id="rsvp">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Konfirmasi Kehadiran</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara dengan lebih baik.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* {showNotification && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-lg text-green-800 animate-fade-in">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  <p className="font-medium">Terima kasih! Konfirmasi kehadiran Anda telah tersimpan.</p>
                </div>
              </div>
            )} */}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Konfirmasi Kehadiran *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.attendance === "hadir" ? 'bg-gradient-to-r from-amber-100 to-green-100 border-amber-300' : 'bg-gray-50 border-gray-300'}`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="hadir"
                        checked={formData.attendance === "hadir"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-1">✅</div>
                        <span className="font-medium">Hadir</span>
                      </div>
                    </label>

                    <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.attendance === "tidak" ? 'bg-gradient-to-r from-rose-100 to-red-100 border-rose-300' : 'bg-gray-50 border-gray-300'}`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="tidak"
                        checked={formData.attendance === "tidak"}
                        onChange={(e) => {
                          handleChange(e)
                          setFormData(prev => ({
                            ...prev,
                            "guests": 1
                          }));
                        }}
                        className="mr-2"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-1">❌</div>
                        <span className="font-medium">Tidak Hadir</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Jumlah Tamu *</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    disabled={formData.attendance === 'tidak'}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num.toString()}>{num} {num === 1 ? 'orang' : 'orang'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Pesan / Ucapan (opsional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tuliskan pesan atau doa untuk mempelai..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Kirim Konfirmasi
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* TAMU */}

          <div className="text-center mb-12 mt-14">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat siapa saja yang sudah mengkonfirmasi kehadiran mereka.
              <br />
              Data diperbarui secara real-time.
            </p>
          </div>

          <div className="flex-col">
            {
              loadingMsg ? <p className="text-center">Memuat ucapan...</p> :
                dataMSG.length > 0 ? dataMSG.map((item) => (
                  <div
                    key={item.id}
                    className="mt-8 bg-white rounded-2xl shadow-xl"
                  >
                    <div className="p-8">
                      <div className="flex justify-between mb-4">
                        <p className="font-semibold">{item.nama}</p>
                        <div className={`text-sm ${item.kehadiran === 'Hadir' ? "text-green-500" : "text-red-500"} font-bold`}>
                          {item.kehadiran}
                        </div>
                      </div>
                      <div className="text-gray-700">
                        {item.pesan}
                      </div>
                    </div>
                  </div>
                )) : <p className="text-center font-bold text-yellow-500">Belum ada ucapan yang tersedia</p>}
          </div>


          {pagination.total > 5 && <PaginationButtons />}

        </div>
      </div>
    </section >
  );
}