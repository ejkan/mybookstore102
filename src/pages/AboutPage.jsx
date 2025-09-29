import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/outline'; // Optional: for a nice icon

const AboutPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto max-w-4xl px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-viridian-800 mb-4">
                        เกี่ยวกับเรา (About Us)
                    </h1>
                    <p className="text-xl text-gray-600">
                        ที่ที่คนรักหนังสือ...มาพบกัน
                    </p>
                </div>



                {/* Our Mission Section */}
                <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">พันธกิจของเรา 🎯</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        ที่ BookStore ภารกิจของเราคือการเชื่อมโยงนักอ่านเข้ากับเรื่องราวที่พวกเขารัก เราเชื่อว่าหนังสือคือประตูสู่โลกใบใหม่
                        เป็นเครื่องมือในการสร้างแรงบันดาลใจ ความรู้ และความเห็นอกเห็นใจ เรามุ่งมั่นที่จะสร้างสรรค์พื้นที่ออนไลน์ที่อบอุ่นและเป็นมิตร
                        ที่ทุกคนสามารถค้นหาหนังสือเล่มโปรดเล่มต่อไปได้อย่างง่ายดาย
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">เรื่องราวของเรา 📜</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        BookStore ก่อตั้งขึ้นในปี 2025 จากความรักในการอ่านของกลุ่มเพื่อนเล็กๆ ที่ต้องการสร้างร้านหนังสือออนไลน์ที่ไม่เหมือนใคร
                        เราอยากให้ที่นี่เป็นมากกว่าแค่แพลตฟอร์มขายหนังสือ แต่เป็น "ชุมชน" สำหรับนักอ่าน ที่ซึ่งทุกคนสามารถแบ่งปันประสบการณ์
                        และค้นพบหนังสือดีๆ ที่คัดสรรมาอย่างตั้งใจ จากวันนั้นถึงวันนี้ เรายังคงยึดมั่นในอุดมการณ์เดิมและเติบโตขึ้นพร้อมกับนักอ่านทุกท่าน
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">ทำไมต้องเลือก BookStore?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-viridian-700 mb-2">📚 หนังสือคัดสรรคุณภาพ</h3>
                            <p className="text-gray-600">เราเลือกหนังสือทุกเล่มด้วยใจ เพื่อให้คุณได้รับสิ่งที่ดีที่สุด</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-viridian-700 mb-2">🚀 จัดส่งรวดเร็ว</h3>
                            <p className="text-gray-600">ส่งตรงถึงหน้าบ้านคุณอย่างรวดเร็วและปลอดภัย</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-viridian-700 mb-2">💬 บริการด้วยใจ</h3>
                            <p className="text-gray-600">ทีมงานของเราพร้อมให้ความช่วยเหลือและแนะนำคุณเสมอ</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        พร้อมที่จะเริ่มต้นการเดินทางครั้งใหม่ไปกับหนังสือเล่มโปรดของคุณแล้วหรือยัง?
                    </p>
                    <Link
                        to="/books"
                        className="inline-flex items-center justify-center px-8 py-4 bg-green-500
            text-white font-semibold rounded-lg hover:bg-viridian-700
            transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        เลือกซื้อหนังสือทั้งหมด
                        <SparklesIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;