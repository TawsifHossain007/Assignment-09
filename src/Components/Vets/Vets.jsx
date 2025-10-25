import React from 'react'
import { Stethoscope, Award, HeartPulse } from 'lucide-react'
import { div } from 'framer-motion/client'

const vets = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialty: "Canine Health Specialist",
    experience: "10 Years Experience",
    icon: <Stethoscope className="text-orange-500 w-10 h-10" />,
    img: "https://i.ibb.co.com/NdKhvs9T/Brt-Doctor.webp",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Exotic Animal Care",
    experience: "8 Years Experience",
    icon: <HeartPulse className="text-orange-500 w-10 h-10" />,
    img: "https://i.ibb.co.com/C3mNjBDT/doctor-hospital-1098-19685.jpg",
  },
  {
    id: 3,
    name: "Dr. Sophia Ahmed",
    specialty: "Feline Medicine & Surgery",
    experience: "12 Years Experience",
    icon: <Award className="text-orange-500 w-10 h-10" />,
    img: "https://i.ibb.co.com/Zz7DWLFG/portrait-young-muslim-woman-doctor-standing-hall-hospital-dressed-hijab-1145931-46599.jpg",
  },
]

const Vets = () => {
  return (
    <div className='border-b-3 border-[#E0E0E0] pb-5'>
        <section className="bg-[#FFF9F4] py-16 px-6 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Expert Vets</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our caring and experienced veterinarians are dedicated to keeping your pets healthy,
          happy, and full of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 
                       hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 
                       text-center group"
          >
            <img
              src={vet.img}
              alt={vet.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-orange-300"
            />
            <div className="flex justify-center mb-3">{vet.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">{vet.name}</h3>
            <p className="text-orange-500 font-medium">{vet.specialty}</p>
            <p className="text-gray-600 mt-2">{vet.experience}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  )
}

export default Vets
