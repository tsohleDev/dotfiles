"use client";
import React, { useEffect, useState } from "react";
import ExpandableWidget from "@/components/widgets/ExpandableCard";

const subscriptionTiers = [
    {
        title: "Free",
        images: [],
        monthly: 0,
        yearly: 0,
        description: "AI Quizzes | Study Retention",
    },
    {
        title: "Base",
        images: [],
        monthly: 120,
        yearly: 1200,
        description:
            "AI Quizzes | Study Retention | Learning Analytics | Career Portfolio",
    },
    {
        title: "Premium",
        images: [],
        monthly: 180,
        yearly: 1800,
        description:
            "AI Quizzes | Study Retention | Learning Analytics | Career Portfolio | Technical Training | Soft Skills Training | Job Application Automation | Bursary Application Automation | University Application Automation",
    },
    {
        title: "For Schools",
        images: [],
        monthly: 100,
        yearly: 1000,
        description:
            "Premium Package for Students | AI Marking | AI Generated Assignments | AI Generated Timetables | Mobile App | Parental Portal | Administrative Automation",
    },
];

const currencySymbols: Record<string, string> = {
    ZAR: "R",
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    INR: "₹",
    AUD: "A$",
    CAD: "C$",
    CNY: "¥",
};

const Pricing: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [convertedTiers, setConvertedTiers] = useState(subscriptionTiers);
    const [currency, setCurrency] = useState("ZAR");

    useEffect(() => {
        const fetchConversionRates = async () => {
            try {
                // Fetch user's location and currency
                const locationRes = await fetch("https://ipapi.co/json/");
                const locationData = await locationRes.json();
                const userCurrency = locationData.currency || "ZAR"; // Default to ZAR
                setCurrency(userCurrency);

                // Fetch conversion rates
                const exchangeRateRes = await fetch(
                    `https://api.exchangerate-api.com/v4/latest/ZAR`
                );
                const exchangeRateData = await exchangeRateRes.json();
                const conversionRate = exchangeRateData.rates[userCurrency] || 1;

                // Convert prices
                const updatedTiers = subscriptionTiers.map((tier) => ({
                    ...tier,
                    monthly: parseFloat((tier.monthly * conversionRate).toFixed(2)),
                    yearly: parseFloat((tier.yearly * conversionRate).toFixed(2)),
                }));

                setConvertedTiers(updatedTiers);
            } catch (error) {
                console.error("Error fetching conversion rates:", error);
            }
        };

        fetchConversionRates();
    }, []);

    const currencySymbol = currencySymbols[currency] || ""; // Fallback to an empty string if currency not found

    return (
        <div>
            <div className="flex justify-center my-4">
                <button
                    onClick={() => setIsMonthly(true)}
                    className={`px-4 py-2 mx-8 rounded ${isMonthly
                        ? "bg-primary text-white"
                        : "bg-transparent border border-secondary text-secondary"
                        }`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setIsMonthly(false)}
                    className={`px-4 py-2 mx-8 rounded ${!isMonthly
                        ? "bg-primary text-white"
                        : "bg-transparent border border-secondary text-secondary"
                        }`}
                >
                    Yearly
                </button>
            </div>

            <div className="lg:hidden">
                {convertedTiers.map((metric, index) => (
                    <ExpandableWidget
                        key={index}
                        title={metric.title}
                        subtitle={`${currencySymbol}${isMonthly ? `${metric.monthly} Monthly` : `${metric.yearly} Yearly`}${metric.title === "For Schools" ? " Per Student" : ""}`}
                        content={metric.description}
                    />
                ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:my-16">
                {convertedTiers.map((metric, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-start p-4 border border-gray-300 rounded-lg ${metric.title === "For Schools" ? "col-span-3 mx-18" : ""}`}
                    >
                        <div className="text-4xl font-semibold">{metric.title}</div>
                        <div className="text-lg text-secondary">
                            {currencySymbol}
                            {isMonthly ? `${metric.monthly} Monthly` : `${metric.yearly} Yearly`}
                            {metric.title === "For Schools" ? " Per Student" : ""}
                        </div>
                        <div className="text-sm mt-2">
                            <ul className={`${metric.title === "For Schools" ? "flex list-disc flex-row flex-wrap space-x-8 mx-2" : "list-disc pl-4 "}`}>
                                {metric.description.split(" | ").map((line, idx) => (
                                    <li key={idx} className="text-start pr-8 text-xl">{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
