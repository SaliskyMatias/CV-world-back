const { Cv } = require("../db");

async function populateLanguage() {
  try {
    const Cvs = await Cv.bulkCreate(
        [
            {
                name: "Alice Johnson",
                image: "",
                header: "UX/UI Designer",
                description: "Experienced designer with a focus on creating intuitive and visually appealing user interfaces.",
                experience: [
                    {
                        dateRange: "Jun 2018 - Present",
                        company: "Design Studios Ltd.",
                        role: "Senior UX/UI Designer",
                        responsibilities: "Leading design projects, collaborating with cross-functional teams, and conducting user research.",
                    }
                ],
                education: [
                    {
                        dateRange: "Sep 2014 - May 2018",
                        institution: "Art & Design University",
                        career: "Bachelor of Fine Arts in Graphic Design",
                    }
                ],
                contact: [
                    {
                        phone: "+987654321",
                        email: "alice.johnson@example.com",
                        location: "City, Country",
                        website: "www.alicejohnson.com",
                    }
                ],
                skills: ["Adobe XD", "Sketch", "InVision", "HTML", "CSS"],
                speakingLanguages: ["English", "French"],
                otherInterests: ["Painting", "Traveling", "Yoga"],
                creationDate: "2024-02-13",
                views: 1560,
                category: "Diseño y Creatividad",
                language: "Inglés"
            },
            {
                name: "Bob Miller",
                image: "",
                header: "Software Engineer",
                description: "Passionate software engineer with expertise in developing scalable and efficient web applications.",
                experience: [
                    {
                        dateRange: "Jan 2019 - Present",
                        company: "Tech Innovators Inc.",
                        role: "Full Stack Developer",
                        responsibilities: "Designing and implementing software solutions, collaborating with cross-functional teams, and ensuring code quality.",
                    }
                ],
                education: [
                    {
                        dateRange: "Sep 2015 - Apr 2019",
                        institution: "Computer Science University",
                        career: "Bachelor of Science in Computer Science",
                    }
                ],
                contact: [
                    {
                        phone: "+123456789",
                        email: "bob.miller@example.com",
                        location: "City, Country",
                        website: "www.bobmiller.dev",
                    }
                ],
                skills: ["JavaScript", "React", "Node.js", "MongoDB", "RESTful APIs"],
                speakingLanguages: ["English", "Spanish"],
                otherInterests: ["Gaming", "Reading", "Cooking"],
                creationDate: "2024-02-13",
                views: 2305,
                category: "IT y Desarrollo de Software",
                language: "Español"
            }
        ]
    )
    console.log("Cv table populated successfully");
  } catch (error) {
    console.error("Error populating language database:", error);
  };
};

module.exports = populateLanguage;