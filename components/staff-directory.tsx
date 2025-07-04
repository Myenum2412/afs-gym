"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, Award, Star, Users, Target } from "lucide-react"

const staffMembers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    position: "Head Trainer & Founder",
    department: "Management",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Strength Training", "Nutrition", "Weight Loss"],
    certifications: ["NASM-CPT", "Precision Nutrition", "CSCS"],
    experience: "15+ years",
    bio: "Alex founded FitZone Pro with a vision to make premium fitness accessible to everyone. With over 15 years of experience, he specializes in strength training and has helped thousands achieve their fitness goals.",
    email: "alex@fitzonepro.com",
    phone: "(555) 123-4567",
    rating: 4.9,
    clients: 200,
    availability: "Mon-Fri: 6 AM - 8 PM",
  },
  {
    id: 2,
    name: "Sarah Kim",
    position: "Yoga & Pilates Director",
    department: "Group Fitness",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Yoga", "Pilates", "Mindfulness", "Flexibility"],
    certifications: ["RYT-500", "PMA-CPT", "Meditation Teacher"],
    experience: "12+ years",
    bio: "Sarah brings a holistic approach to fitness, combining physical practice with mental wellness. Her classes are known for their peaceful atmosphere and transformative results.",
    email: "sarah@fitzonepro.com",
    phone: "(555) 123-4568",
    rating: 4.8,
    clients: 150,
    availability: "Mon-Sat: 7 AM - 7 PM",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    position: "HIIT & Cardio Specialist",
    department: "Personal Training",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["HIIT", "Cardio", "Athletic Performance", "Fat Loss"],
    certifications: ["ACSM-CPT", "TRX Certified", "Kettlebell Specialist"],
    experience: "10+ years",
    bio: "Marcus is passionate about high-intensity training and helping clients push their limits. His energetic approach and proven methods deliver exceptional results.",
    email: "marcus@fitzonepro.com",
    phone: "(555) 123-4569",
    rating: 4.9,
    clients: 180,
    availability: "Tue-Sun: 5 AM - 9 PM",
  },
  {
    id: 4,
    name: "Dr. Lisa Chen",
    position: "Wellness & Nutrition Director",
    department: "Wellness",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Nutrition", "Wellness", "Rehabilitation", "Senior Fitness"],
    certifications: ["PhD Exercise Science", "RD", "CSCS"],
    experience: "18+ years",
    bio: "Dr. Chen combines scientific expertise with practical application to help clients achieve optimal health through nutrition and exercise.",
    email: "lisa@fitzonepro.com",
    phone: "(555) 123-4570",
    rating: 5.0,
    clients: 120,
    availability: "Mon-Fri: 8 AM - 6 PM",
  },
  {
    id: 5,
    name: "Maria Santos",
    position: "Dance & Group Fitness Instructor",
    department: "Group Fitness",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Zumba", "Dance Fitness", "Aqua Aerobics", "Senior Classes"],
    certifications: ["Zumba Instructor", "Aqua Fitness", "Senior Fitness"],
    experience: "8+ years",
    bio: "Maria brings joy and energy to every class. Her infectious enthusiasm and creative choreography make fitness fun and accessible for all ages.",
    email: "maria@fitzonepro.com",
    phone: "(555) 123-4571",
    rating: 4.7,
    clients: 250,
    availability: "Mon-Sat: 6 AM - 8 PM",
  },
  {
    id: 6,
    name: "David Thompson",
    position: "Strength & Conditioning Coach",
    department: "Personal Training",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Powerlifting", "Olympic Lifting", "Sports Performance", "Injury Prevention"],
    certifications: ["CSCS", "USAW-L1", "FMS Certified"],
    experience: "14+ years",
    bio: "David works with athletes and fitness enthusiasts to build strength, power, and resilience. His technical expertise ensures safe and effective training.",
    email: "david@fitzonepro.com",
    phone: "(555) 123-4572",
    rating: 4.8,
    clients: 160,
    availability: "Mon-Fri: 5 AM - 9 PM",
  },
]

const departments = ["All", "Management", "Personal Training", "Group Fitness", "Wellness"]

export default function StaffDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null)

  const filteredStaff =
    selectedDepartment === "All"
      ? staffMembers
      : staffMembers.filter((member) => member.department === selectedDepartment)

  const openStaffModal = (staffId: number) => {
    setSelectedStaff(staffId)
  }

  const closeStaffModal = () => {
    setSelectedStaff(null)
  }

  const selectedStaffMember = staffMembers.find((member) => member.id === selectedStaff)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600 border-0 px-6 py-2 text-lg">👥 Meet Our Team</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Expert Staff Directory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers and wellness experts are here to guide you on your fitness journey with personalized
            attention and professional expertise.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((department) => (
            <Button
              key={department}
              variant={selectedDepartment === department ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedDepartment === department
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </Button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((member) => (
            <Card
              key={member.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden"
              onClick={() => openStaffModal(member.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white">{member.department}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{member.rating}</span>
                    <span className="text-xs">({member.clients} clients)</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-orange-600 transition-colors">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{member.bio}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{member.clients} active clients</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {member.specialties.slice(0, 2).map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {member.specialties.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{member.specialties.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      openStaffModal(member.id)
                    }}
                  >
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = `mailto:${member.email}`
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Staff Detail Modal */}
        {selectedStaffMember && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={selectedStaffMember.image || "/placeholder.svg"}
                    alt={selectedStaffMember.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white hover:bg-white/20"
                    onClick={closeStaffModal}
                  >
                    ×
                  </Button>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-3xl font-bold mb-2">{selectedStaffMember.name}</h2>
                    <p className="text-xl text-orange-300">{selectedStaffMember.position}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">About</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{selectedStaffMember.bio}</p>

                      <h4 className="font-semibold mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedStaffMember.specialties.map((specialty, index) => (
                          <Badge key={index} className="bg-orange-100 text-orange-600">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="font-semibold mb-3">Certifications</h4>
                      <div className="space-y-2 mb-6">
                        {selectedStaffMember.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Award className="w-4 h-4 mr-2 text-orange-500" />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Stats & Contact</h3>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="font-medium">Rating</span>
                          </div>
                          <span className="font-bold text-orange-600">{selectedStaffMember.rating}/5.0</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-blue-500 mr-2" />
                            <span className="font-medium">Active Clients</span>
                          </div>
                          <span className="font-bold text-orange-600">{selectedStaffMember.clients}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Target className="w-5 h-5 text-green-500 mr-2" />
                            <span className="font-medium">Experience</span>
                          </div>
                          <span className="font-bold text-orange-600">{selectedStaffMember.experience}</span>
                        </div>
                      </div>

                      <h4 className="font-semibold mb-3">Availability</h4>
                      <p className="text-gray-600 mb-6">{selectedStaffMember.availability}</p>

                      <div className="space-y-3">
                        <Button
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                          onClick={() => (window.location.href = `mailto:${selectedStaffMember.email}`)}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                          onClick={() => (window.location.href = `tel:${selectedStaffMember.phone}`)}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
