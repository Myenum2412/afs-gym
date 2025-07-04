"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FormRedirectHandler, FormRedirectInfo } from "@/components/form-redirect-handler"
import { Calendar, Clock, CheckCircle } from "lucide-react"

const appointmentTypes = [
  {
    id: "tour",
    name: "Facility Tour",
    duration: "30 minutes",
    description: "Explore our facilities with a guided tour",
    price: "Free",
    color: "bg-blue-500",
  },
  {
    id: "consultation",
    name: "Fitness Consultation",
    duration: "45 minutes",
    description: "Discuss your fitness goals with an expert",
    price: "Free",
    color: "bg-green-500",
  },
  {
    id: "personal-training",
    name: "Personal Training Session",
    duration: "60 minutes",
    description: "One-on-one training with a certified trainer",
    price: "$75",
    color: "bg-orange-500",
  },
  {
    id: "nutrition",
    name: "Nutrition Consultation",
    duration: "30 minutes",
    description: "Personalized nutrition guidance",
    price: "$50",
    color: "bg-purple-500",
  },
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
]

export default function AppointmentScheduler() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
    setStep(2)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setStep(3)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const resetBooking = () => {
    setStep(1)
    setSelectedType("")
    setSelectedDate("")
    setSelectedTime("")
    setFormData({ name: "", email: "", phone: "", notes: "" })
  }

  const getNextWeekDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date.toISOString().split("T")[0],
        display: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
      })
    }
    return dates
  }

  const selectedAppointmentType = appointmentTypes.find((type) => type.id === selectedType)

  return (
    <>
      <FormRedirectHandler
        config={{
          customMessage: "Thank you for booking your appointment! We're redirecting you to confirm your details...",
          redirectDelay: 1500,
        }}
      />

      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-xl flex items-center">
            <Calendar className="w-5 h-5 mr-3" />
            Book an Appointment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-12 h-1 mx-2 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Select Appointment Type */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-6">What would you like to book?</h3>
              <div className="grid gap-4">
                {appointmentTypes.map((type) => (
                  <div
                    key={type.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => handleTypeSelect(type.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 ${type.color} rounded-full`} />
                        <div>
                          <h4 className="font-semibold group-hover:text-blue-600 transition-colors">{type.name}</h4>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{type.price}</div>
                        <div className="text-sm text-gray-500">{type.duration}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Select a Date</h3>
                <Button variant="outline" size="sm" onClick={() => setStep(1)}>
                  Back
                </Button>
              </div>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 ${selectedAppointmentType?.color} rounded-full`} />
                  <span className="font-medium">{selectedAppointmentType?.name}</span>
                  <Badge variant="outline">{selectedAppointmentType?.duration}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {getNextWeekDates().map((dateObj) => (
                  <Button
                    key={dateObj.date}
                    variant="outline"
                    className="h-auto p-4 text-left hover:bg-blue-50 hover:border-blue-500 bg-transparent"
                    onClick={() => handleDateSelect(dateObj.date)}
                  >
                    <div>
                      <div className="font-semibold">{dateObj.dayName}</div>
                      <div className="text-sm text-gray-600">{dateObj.display}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Select a Time</h3>
                <Button variant="outline" size="sm" onClick={() => setStep(2)}>
                  Back
                </Button>
              </div>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${selectedAppointmentType?.color} rounded-full`} />
                    <span className="font-medium">{selectedAppointmentType?.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className="hover:bg-blue-50 hover:border-blue-500 bg-transparent"
                    onClick={() => handleTimeSelect(time)}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your Information</h3>
                <Button variant="outline" size="sm" onClick={() => setStep(3)}>
                  Back
                </Button>
              </div>

              {/* Booking Summary */}
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-2 text-green-800">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{selectedAppointmentType?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{selectedAppointmentType?.duration}</span>
                  </div>
                  <div className="flex justify-between border-t border-green-300 pt-1 mt-2">
                    <span className="font-semibold">Price:</span>
                    <span className="font-bold text-green-600">{selectedAppointmentType?.price}</span>
                  </div>
                </div>
              </div>

              <form id="appointment-form" data-redirect-to-google-forms className="space-y-4">
                <input type="hidden" name="appointmentType" value={selectedAppointmentType?.name} />
                <input type="hidden" name="appointmentDate" value={selectedDate} />
                <input type="hidden" name="appointmentTime" value={selectedTime} />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="appointmentName">
                    Full Name *
                  </label>
                  <Input
                    id="appointmentName"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="appointmentEmail">
                    Email Address *
                  </label>
                  <Input
                    id="appointmentEmail"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="appointmentPhone">
                    Phone Number *
                  </label>
                  <Input
                    id="appointmentPhone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="appointmentNotes">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="appointmentNotes"
                    name="notes"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Any specific requests or questions?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <FormRedirectInfo className="mb-4" />

                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirm Booking
                  </Button>
                  <Button type="button" variant="outline" onClick={resetBooking}>
                    Start Over
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
