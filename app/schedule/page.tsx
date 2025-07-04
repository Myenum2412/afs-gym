import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Class Schedule - Group Fitness Classes & Training Times",
  description:
    "View our weekly class schedule including HIIT, yoga, pilates, spin, and more. Book your spot in advance and never miss a workout.",
}

export default function SchedulePage() {
  const schedule = {
    Monday: [
      { time: "6:00 AM", class: "Morning HIIT", instructor: "Alex Rodriguez", duration: "45 min", spots: "12/15" },
      { time: "7:30 AM", class: "Yoga Flow", instructor: "Sarah Kim", duration: "60 min", spots: "8/20" },
      {
        time: "12:00 PM",
        class: "Lunch Break Cardio",
        instructor: "Marcus Johnson",
        duration: "30 min",
        spots: "15/15",
      },
      { time: "6:00 PM", class: "Strength Training", instructor: "Alex Rodriguez", duration: "60 min", spots: "10/12" },
      { time: "7:30 PM", class: "Pilates", instructor: "Sarah Kim", duration: "45 min", spots: "6/15" },
    ],
    Tuesday: [
      { time: "6:00 AM", class: "Spin Class", instructor: "Marcus Johnson", duration: "45 min", spots: "14/16" },
      { time: "9:00 AM", class: "Senior Fitness", instructor: "Sarah Kim", duration: "45 min", spots: "8/12" },
      { time: "12:00 PM", class: "Boxing Basics", instructor: "Alex Rodriguez", duration: "60 min", spots: "6/10" },
      { time: "6:00 PM", class: "Zumba", instructor: "Maria Santos", duration: "60 min", spots: "18/25" },
      { time: "7:30 PM", class: "Power Yoga", instructor: "Sarah Kim", duration: "75 min", spots: "12/20" },
    ],
    Wednesday: [
      { time: "6:00 AM", class: "Boot Camp", instructor: "Marcus Johnson", duration: "60 min", spots: "10/15" },
      { time: "7:30 AM", class: "Gentle Yoga", instructor: "Sarah Kim", duration: "60 min", spots: "15/20" },
      { time: "12:00 PM", class: "Express HIIT", instructor: "Alex Rodriguez", duration: "30 min", spots: "12/15" },
      {
        time: "6:00 PM",
        class: "Functional Training",
        instructor: "Marcus Johnson",
        duration: "45 min",
        spots: "8/12",
      },
      {
        time: "7:30 PM",
        class: "Meditation & Mindfulness",
        instructor: "Sarah Kim",
        duration: "30 min",
        spots: "10/15",
      },
    ],
    Thursday: [
      { time: "6:00 AM", class: "Cardio Kickboxing", instructor: "Alex Rodriguez", duration: "45 min", spots: "11/15" },
      { time: "9:00 AM", class: "Aqua Fitness", instructor: "Lisa Chen", duration: "45 min", spots: "6/12" },
      { time: "12:00 PM", class: "Core Blast", instructor: "Marcus Johnson", duration: "30 min", spots: "14/15" },
      { time: "6:00 PM", class: "CrossFit", instructor: "Alex Rodriguez", duration: "60 min", spots: "8/10" },
      { time: "7:30 PM", class: "Yin Yoga", instructor: "Sarah Kim", duration: "75 min", spots: "12/18" },
    ],
    Friday: [
      { time: "6:00 AM", class: "Friday Burn", instructor: "Marcus Johnson", duration: "45 min", spots: "13/15" },
      { time: "7:30 AM", class: "Vinyasa Flow", instructor: "Sarah Kim", duration: "60 min", spots: "16/20" },
      { time: "12:00 PM", class: "Lunch Lift", instructor: "Alex Rodriguez", duration: "45 min", spots: "9/12" },
      { time: "6:00 PM", class: "Dance Fitness", instructor: "Maria Santos", duration: "60 min", spots: "20/25" },
      { time: "7:30 PM", class: "Stretch & Recovery", instructor: "Sarah Kim", duration: "45 min", spots: "8/15" },
    ],
    Saturday: [
      { time: "8:00 AM", class: "Weekend Warrior", instructor: "Alex Rodriguez", duration: "75 min", spots: "12/15" },
      { time: "9:30 AM", class: "Family Yoga", instructor: "Sarah Kim", duration: "45 min", spots: "10/20" },
      {
        time: "11:00 AM",
        class: "Outdoor Boot Camp",
        instructor: "Marcus Johnson",
        duration: "60 min",
        spots: "15/20",
      },
      { time: "2:00 PM", class: "Beginner's Strength", instructor: "Lisa Chen", duration: "60 min", spots: "6/10" },
      { time: "4:00 PM", class: "Active Recovery", instructor: "Sarah Kim", duration: "45 min", spots: "8/15" },
    ],
    Sunday: [
      { time: "9:00 AM", class: "Sunday Stretch", instructor: "Sarah Kim", duration: "60 min", spots: "14/20" },
      { time: "10:30 AM", class: "Aqua Aerobics", instructor: "Lisa Chen", duration: "45 min", spots: "8/12" },
      { time: "12:00 PM", class: "HIIT & Run", instructor: "Marcus Johnson", duration: "45 min", spots: "10/15" },
      { time: "2:00 PM", class: "Restorative Yoga", instructor: "Sarah Kim", duration: "75 min", spots: "12/18" },
      { time: "4:00 PM", class: "Sunday Funday", instructor: "Maria Santos", duration: "60 min", spots: "16/25" },
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Class Schedule</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Weekly Class Schedule</h1>
            <p className="text-xl leading-relaxed">
              Join our diverse range of group fitness classes led by certified instructors. From high-intensity workouts
              to relaxing yoga sessions, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Classes per Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Class Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Online Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">This Week's Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your classes in advance to secure your spot. All classes are included with Premium and Elite
              memberships.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(schedule).map(([day, classes]) => (
              <Card key={day} className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    {day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid gap-0">
                    {classes.map((classInfo, index) => (
                      <div key={index} className="p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-4 mb-2">
                              <Badge variant="outline" className="text-orange-600 border-orange-600">
                                <Clock className="w-3 h-3 mr-1" />
                                {classInfo.time}
                              </Badge>
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                {classInfo.duration}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{classInfo.class}</h3>
                            <p className="text-gray-600 mb-2">Instructor: {classInfo.instructor}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="w-4 h-4 mr-1" />
                              <span
                                className={`${classInfo.spots.split("/")[0] === classInfo.spots.split("/")[1] ? "text-red-500 font-medium" : ""}`}
                              >
                                {classInfo.spots} spots
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              className={`${
                                classInfo.spots.split("/")[0] === classInfo.spots.split("/")[1]
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-orange-500 hover:bg-orange-600"
                              } text-white`}
                              disabled={classInfo.spots.split("/")[0] === classInfo.spots.split("/")[1]}
                            >
                              {classInfo.spots.split("/")[0] === classInfo.spots.split("/")[1] ? "Full" : "Book Now"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-600">Class Types</Badge>
            <h2 className="text-4xl font-bold mb-6">Find Your Perfect Workout</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of fitness classes designed for all levels and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "HIIT",
                description: "High-intensity interval training for maximum calorie burn",
                level: "All Levels",
                duration: "30-45 min",
                benefits: ["Burns calories", "Improves cardio", "Builds strength"],
              },
              {
                name: "Yoga",
                description: "Mind-body practice combining poses, breathing, and meditation",
                level: "Beginner to Advanced",
                duration: "60-75 min",
                benefits: ["Increases flexibility", "Reduces stress", "Improves balance"],
              },
              {
                name: "Spin",
                description: "Indoor cycling with energizing music and motivation",
                level: "All Levels",
                duration: "45 min",
                benefits: ["Cardio workout", "Low impact", "Burns calories"],
              },
              {
                name: "Strength Training",
                description: "Build muscle and increase strength with weights",
                level: "Intermediate to Advanced",
                duration: "60 min",
                benefits: ["Builds muscle", "Increases strength", "Boosts metabolism"],
              },
              {
                name: "Pilates",
                description: "Core-focused exercises for strength and stability",
                level: "All Levels",
                duration: "45-60 min",
                benefits: ["Strengthens core", "Improves posture", "Increases flexibility"],
              },
              {
                name: "Zumba",
                description: "Dance fitness combining Latin rhythms with exercise",
                level: "All Levels",
                duration: "60 min",
                benefits: ["Fun workout", "Burns calories", "Improves coordination"],
              },
            ].map((classType, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{classType.name}</h3>
                  <p className="text-gray-600 mb-4">{classType.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Level:</span>
                      <span className="text-sm font-medium">{classType.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-sm font-medium">{classType.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {classType.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                  >
                    View Schedule
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Booking Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">How to Book</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Choose Your Class</h4>
                        <p className="text-gray-600 text-sm">
                          Browse our schedule and select the class you want to attend.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Book Online or In-App</h4>
                        <p className="text-gray-600 text-sm">Use our website or mobile app to secure your spot.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Arrive Early</h4>
                        <p className="text-gray-600 text-sm">
                          Come 10-15 minutes before class starts to check in and set up.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Policies</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Cancellation Policy</h4>
                      <p className="text-gray-600 text-sm">
                        Cancel up to 2 hours before class starts to avoid charges.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Late Arrival</h4>
                      <p className="text-gray-600 text-sm">
                        Doors close 5 minutes after class starts for safety reasons.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">What to Bring</h4>
                      <p className="text-gray-600 text-sm">
                        Water bottle, towel, and appropriate workout attire. Mats provided.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">First-Time Visitors</h4>
                      <p className="text-gray-600 text-sm">
                        Arrive 15 minutes early for orientation and equipment setup.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join a Class?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your first class today and experience the energy of our group fitness community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
              Book Your Class
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg bg-transparent"
            >
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
