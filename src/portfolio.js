/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Nisarga Gondi",
  title: "Hi, I'm Nisarga",
  subTitle: emoji(
    "Graduate Student @ Carnegie Mellon University 🎓 | Research Assistant @ CMU CyLab 🔬 | Building adversarial ML defenses and secure production systems"
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NisargaGondi",
  linkedin: "https://www.linkedin.com/in/nisarga-gondi",
  gmail: "nisargagondi@gmail.com",
  twitter: "https://x.com/STARWAY_4545",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER & SECURITY RESEARCHER EXPLORING THE INTERSECTION OF ML AND SECURITY",
  skills: [
    emoji("⚡ Research adversarial ML defenses for security-critical applications at CMU CyLab"),
    emoji("⚡ Build production ML systems with focus on deployment, optimization, and robustness"),
    emoji("⚡ Develop secure infrastructure and automation tools for cloud platforms"),
    emoji("⚡ Apply security analysis through binary exploitation, cryptographic attacks, and penetration testing")
  ],

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Master of Science in AI Engineering - Information Security",
      duration: "August 2025 - May 2027",
      desc: "Research Assistant @ CyLab",
      descBullets: [
        "Coursework: ML with Adversaries in Mind, Usable Privacy and Security, Introduction to Deep Learning, Information Security",
        "Working on adversarial ML defenses for SMS scam detection systems"
      ]
    },
    {
      schoolName: "B.M.S. College of Engineering",
      logo: require("./assets/images/bmsceLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "December 2021 - June 2025",
      desc: "Published IEEE researcher. Coordinated Singularity Astronomical Society (500+ members).",
      descBullets: [
        "IEEE Conference publication on multi-constraint time series imputation",
        "Secured collaboration with ISRO for astronomical research projects"
      ]
    }
  ]
};

// Tech Stack - DISABLED AS REQUESTED

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Assistant",
      company: "CMU CyLab",
      companylogo: require("./assets/images/cylabLogo.png"),
      date: "November 2025 – Present",
      desc: "Adversarial Machine Learning Research",
      descBullets: [
        "Prototyping offline-capable ML inference for mobile SMS/MMS scam detection",
        "Built and enhanced open source Android app (Kotlin) for scam detection research",
        "Developing adversarial defenses for text classifiers against evasion attacks"
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Ericsson",
      companylogo: require("./assets/images/ericssonLogo.png"),
      date: "March 2025 – July 2025",
      desc: "5G Infrastructure Automation",
      descBullets: [
        "Architected Quick Dimensioning Tool for 5G telecom clusters with 50+ deployment profiles",
        "Built Python CLI tool with JSON Schema validation and automated Helm chart generation",
        "Reduced profile selection time from hours to minutes through DLL algorithm optimization"
      ]
    },
    {
      role: "Research and Development Intern",
      company: "Samsung Prism",
      companylogo: require("./assets/images/samsungLogo.png"),
      date: "March 2024 – September 2024",
      desc: "Production ML Pipeline Development",
      descBullets: [
        "Designed Bixby Smart Notification classifier for Samsung's virtual assistant",
        "Engineered Android application classifying 10,000+ notifications with 93.15% accuracy",
        "Deployed ML model via ONNX Runtime with privacy safeguards and data collection pipeline"
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Featured Projects

const bigProjects = {
  title: "Featured Projects",
  subtitle: "RESEARCH & DEVELOPMENT WORK",
  projects: [
    {
      image: require("./assets/images/adversarialML.png"),
      projectName: "Adversarial ML + Information Security Research",
      projectDesc: "Graduate research on adversarial robustness for text classifiers at CMU CyLab. Evaluating attack vectors and defense mechanisms for SMS scam detection models.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NisargaGondi/Adversarial-ML-Information-Security-Research"
        }
      ]
    },
    {
      image: require("./assets/images/ieee.png"),
      projectName: "Multi-Constraint Time Series Imputation",
      projectDesc: "Published at IEEE 2024. Novel framework for handling missing values in sensor data by sequencing 12 imputation algorithms. Achieved 60% RMSE reduction on production datasets.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NisargaGondi/DynamicIterativeImputation"
        },
        {
          name: "Read Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/11115894"
        }
      ]
    },
    {
      image: require("./assets/images/uav.png"),
      projectName: "Disaster Management UAV",
      projectDesc: "All India Rank 7 at Aerothon 2024 National Competition. Autonomous UAV system for disaster zone reconnaissance with real-time computer vision and GPS-denied navigation.",
      footerLink: [
        {
          name: "View Project",
          url: "https://sites.google.com/view/nisargagondi/projects/aerothon24"
        }
      ]
    }
  ],
  display: true
};

// Upcoming Work Section

const upcomingWork = {
  title: "Upcoming Work & Research",
  subtitle: "CURRENT AND FUTURE RESEARCH DIRECTIONS IN SECURITY AND AI",

  projects: [
    {
      title: "Information Flow Security Threats",
      subtitle: "Usable Privacy & Security Course Project - Spring 2026",
      image: require("./assets/images/securityFlow.png"),
      imageAlt: "Information Flow Security",
      footerLink: []
    },
    {
      title: "LLM Jailbreak Prevention via Automated Reasoning",
      subtitle: "AWS Collaboration - Exploring formal methods for AI safety",
      image: require("./assets/images/adversarialML.png"),
      imageAlt: "LLM Security",
      footerLink: [
        {
          name: "Related: verify-rust-std",
          url: "https://github.com/model-checking/verify-rust-std"
        }
      ]
    },
    {
      title: "Advanced Cybersecurity Research",
      subtitle: "Exploring cryptographic attacks, binary exploitation, and reverse engineering",
      image: require("./assets/images/cyberSecurity.png"),
      imageAlt: "Cybersecurity",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Publications, Competition Rankings, Leadership, and Professional Certifications",

  achievementsCards: [
    {
      title: "IEEE Conference Publication",
      subtitle: "Multi-Constraint Time Series Imputation - Published in IEEE Conference 2024",
      image: require("./assets/images/ieee.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/11115894"
        }
      ]
    },
    {
      title: "All India Rank 7 - Aerothon 2024",
      subtitle: "National UAV competition with 300+ teams. Built autonomous disaster management UAV system.",
      image: require("./assets/images/aerothon.png"),
      imageAlt: "Aerothon Logo",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://sites.google.com/view/nisargagondi/projects/aerothon24"
        }
      ]
    },
    {
      title: "Singularity Astronomical Society Coordinator",
      subtitle: "Led 500+ member BMSCE astronomical organization. Secured ISRO collaboration and coordinated radio telescope launch.",
      image: require("./assets/images/singularity.png"),
      imageAlt: "Astronomy Logo",
      footerLink: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/singularity_bmsce"
        },
        {
          name: "News Coverage",
          url: "https://www.etvbharat.com/kn/!state/special-exhibition-by-amateur-astronomical-club-for-zero-shadow-day-kas24042404593"
        }
      ]
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      subtitle: "Comprehensive training in cybersecurity fundamentals, network security, and incident response",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/499dab7f25354f8d191c52cc42efd606"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "Completed Training and Evaluation Deep Learning Models certification",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.microsoft.com/api/achievements/share/en-us/NisargaGondi-5494/XMVXU4WY?sharingId=C63F0083EC4C9E65"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Research & Writing",
  subtitle: "Technical insights on ML security, systems engineering, and research findings",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://ieeexplore.ieee.org/abstract/document/11115894",
      title: "Multi-Constraint Time Series Imputation",
      description: "Novel framework for handling missing values in sensor data through sequential algorithm application. Published in IEEE 2024."
    }
  ],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [""],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in collaborating or discussing opportunities? Reach out!",
  number: "+1 (412) 641-0028",
  email_address: "nisargagondi@gmail.com | ngondi@andrew.cmu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "STARWAY_4545",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  upcomingWork,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};