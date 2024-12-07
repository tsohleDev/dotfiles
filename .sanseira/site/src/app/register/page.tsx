'use client'
import { useState } from "react";
import Header from "@/components/Header";

export type UserCategory = "student" | "teacher" | "manager"; // Add more categories as needed
export type Institution = "university" | "school" | "college" | "none"; // Add more institutions as needed

export type UserData = {
    firstNames: string;
    lastName: string;
    email: string;
    phone: string;
    qualification: string;
    whatsApp: string;
    category: UserCategory;
    institution: Institution;
};

export default function HomePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<UserData>({
        firstNames: "",
        lastName: "",
        email: "",
        phone: "",
        qualification: "",
        whatsApp: "",
        category: "student",
        institution: "none",
    });

    const handleNext = () => {
        if (step === 2) {
            if (!formData.firstNames || !formData.lastName) {
                alert("Please fill in your first and last names.");
                return;
            }

            if (formData.category !== "manager" && !formData.institution) {
                alert("Please select an institution.");
                return;
            }
        }

        if (step < 3) setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        setStep((prevStep) => prevStep + 1);
        // Handle form submission logic here
    };

    return (
        <div>
            <Header path="" />

            <section id="form" className="text-center sm:my-8 md:my-0 2xl:my-12 px-4">
                {step === 1 && (
                    <div className="flex flex-col justify-center my-16 sm:my-32">
                        <h2 className="text-xl font-bold">Step 1: Choose a Category</h2>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setFormData((prevData) => ({ ...prevData, category: "student" }))}
                                className={`btn ${formData.category === "student" ? "bg-primary text-white px-3 py-2 text-xs xs:text-xl sm:text-4xl md:text-2xl rounded" : "bg-transparent border border-secondary text-secondary px-3 py-2 text-xs sm:text-4xl md:text-2xl rounded"}`}
                            >
                                Student
                            </button>
                            <button
                                onClick={() => setFormData((prevData) => ({ ...prevData, category: "teacher" }))}
                                className={`btn mx-2 ${formData.category === "teacher" ? "bg-primary text-white px-3 py-2 text-xs xs:text-xl sm:text-4xl md:text-2xl rounded" : "bg-transparent border border-secondary text-secondary px-3 py-2 text-xs sm:text-4xl md:text-2xl rounded"}`}
                            >
                                Teacher
                            </button>
                            <button
                                onClick={() => setFormData((prevData) => ({ ...prevData, category: "manager" }))}
                                className={`btn ${formData.category === "manager" ? "bg-primary text-white px-3 py-2 text-xs xs:text-xl sm:text-4xl md:text-2xl rounded" : "bg-transparent border border-secondary text-secondary px-3 py-2 text-xs sm:text-4xl md:text-2xl rounded"}`}
                            >
                                Manager
                            </button>
                        </div>
                        <button onClick={handleNext} className="btn-primary text-xl mt-4">
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="text-center flex flex-col justify-center my-16 m:my-32">
                        <h2 className="text-xl font-bold">Step 2: User Details</h2>
                        <input
                            type="text"
                            name="firstNames"
                            placeholder="First Names"
                            value={formData.firstNames}
                            onChange={handleChange}
                            className="border border-primary p-2 mt-4"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-primary p-2 mt-4"
                        />

                        {formData.category !== "manager" && (
                            <select
                                name="institution"
                                value={formData.institution}
                                onChange={handleChange}
                                className="border border-primary p-2 mt-4"
                            >
                                <option value="university">University</option>
                                <option value="school">School</option>
                                <option value="college">College</option>
                                <option value="none">None</option>
                            </select>
                        )}

                        <div className="mt-4">
                            <button onClick={handleBack} className="btn-secondary text-xl">
                                Back
                            </button>
                            <button onClick={handleNext} className="btn-primary text-xl ml-4">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center flex flex-col justify-center my-16 m:my-32">
                        <h2 className="text-xl font-bold">Step 3: Contact Info</h2>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-primary p-2 mt-4"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-primary p-2 mt-4"
                        />
                        <input
                            type="text"
                            name="whatsApp"
                            placeholder="WhatsApp Number"
                            value={formData.whatsApp}
                            onChange={handleChange}
                            className="border border-primary p-2 mt-4"
                        />
                        <div className="mt-4">
                            <button onClick={handleBack} className="btn-secondary text-xl">
                                Back
                            </button>
                            <button onClick={handleSubmit} className="btn-primary text-xl ml-4">
                                Submit
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center flex flex-col justify-center my-16 m:my-32">
                        <h2 className="text-xl font-bold">Step 4: Confirmation</h2>
                        <p className="mt-4">Thank you for registering! We have received your information.</p>

                        <button onClick={() => window.location.href = '/'} className="btn-secondary text-xl mt-4">
                            Go Home
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
