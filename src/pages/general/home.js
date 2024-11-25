import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <main>
            <section className="container bg-1 f-center-c lp-section c-white">
                <div className="section-max">
                    <div style={{ paddingRight: '20vw' }} className="container col-f">
                        <h1 className="text-h1">🚀 Bangun CV Anda Sekarang!</h1>
                        <p>Mulai perjalanan karier Anda dengan CV menarik, dan dibuat dengan mudah menggunakan <b style={{ color: '#ffc400' }}>KOPI</b>. Tingkatkan peluang Anda untuk diterima di perusahaan impian!</p>
                        <div className="container row-f fwb">
                            <Link className="btn-text-small btn btn-primary">Buat CV Sekarang</Link>
                            <Link className="btn-text-small btn btn-info">Pelajari Lebih Lanjut</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container f-center-c lp-section bg-2 c-white">
                <div className="section-max">
                    <div className="container col-f f-center t-center">
                        <h1 className="text-h1"><i class="fa-solid fa-circle-check"></i> Mudah, dan Cepat</h1>
                        <p><b style={{ color: '#ffc400' }}>KOPI</b> (Kerajo Pintar) adalah platform yang dirancang untuk membantu Anda membuat CV yang sempurna, sesuai standar industri, dan tanpa ribet.</p>
                        <p><i class="fa-solid fa-circle-check"></i> Menambahkan Pengalaman Kerja, Keahlian, dan Prestasi</p>
                        <p><i class="fa-solid fa-circle-check"></i> Mengunduh CV dalam format PDF hanya dengan sekali klik</p>
                        <div className="container row-f fwb">
                            <Link className="btn-text-small btn btn-primary">Mulai Sekarang</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container f-center-c lp-section">
                <div className="section-max">
                    <div className="container col-f f-center t-center">
                        <h1 className="text-h1">Siap Untuk Melangkah Lebih Dekat ke Karier Impian Anda?</h1>
                        <p>Jangan biarkan CV biasa menghalangi Anda untuk mendapatkan pekerjaan terbaik. Buat CV yang berbicara lebih dari sekadar kata-kata—buat di <b style={{ color: '#ffc400' }}>KOPI</b> hari ini!</p>
                        <div className="container row-f fwb">
                            <Link className="btn-text-small btn btn-primary">Mulai Sekarang</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;