/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kim SungYeon",
  title: "포기하지 않는 지원자 김성연입니다.",
  subTitle: emoji(
    "Computer Vision, AI, Embedded Software 분야에 관심을 가지고 있으며 실제 환경의 문제를 해결하는 AI 시스템을 연구하고 개발하고 있습니다. YOLOv8, U-Net, Docker 기반 프로젝트 경험을 보유하고 있습니다."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rlatjddus1",
  linkedin: "",
  gmail: "rlatjddus234@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "보유 스킬 목록",
  subTitle: "AI · COMPUTER VISION · EMBEDDED SOFTWARE",

  skills: [
    emoji("⚡ YOLOv8 기반 객체 탐지 시스템 개발"),
    emoji("⚡ U-Net 기반 Semantic Segmentation 모델 개발"),
    emoji("⚡ OpenCV 기반 실시간 영상 처리"),
    emoji("⚡ Docker 기반 AI/기상예측 모델 컨테이너화"),
    emoji("⚡ Socket Programming 기반 서버-클라이언트 시스템 개발"),
    emoji("⚡ Embedded Software 및 실시간 시스템 학습")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Changwon University",
      logo: require("./assets/images/changwonUnivercity.jpg"),
      subHeader: "Major - Computer Science",
      duration: "2020.03 - 2026.08(예정)",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "대충 어디어디 논문 투고",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "학부연구생",
      company: "Division Multimedia Systems",
      companylogo: require("./assets/images/dms.png"),
      date: "2023 - 2026",
      desc:
        "분산 멀티미디어 연구실",
      descBullets: [
        "YOLOv8 객체 탐지 연구",
        "U-Net Semantic Segmentation 연구",
        "실시간 영상 분석 시스템 개발"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "대표 프로젝트",

  projects: [
    {
      image: require("./assets/images/harvardLogo.png"),
      projectName: "AI 기반 객체 탐지 및 위험 분석 시스템",
      projectDesc:
        "YOLOv8과 U-Net을 활용한 실시간 위험 감지 시스템. 세종시 자율주행 AI 경진대회 3등 수상."
    },

    {
      image: require("./assets/images/harvardLogo.png"),
      projectName: "시각장애인 보행 보조 시스템",
      projectDesc:
        "YOLOv8, MiDaS, Kalman Filter 기반 실시간 위험 감지 및 음성 안내 시스템."
    },

    {
      image: require("./assets/images/harvardLogo.png"),
      projectName: "Low-GloSea6 Docker Containerization",
      projectDesc:
        "기상예측모델 Low-GloSea6를 Docker 환경으로 컨테이너화하여 설치 및 운영 효율 개선."
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards & Publications 🏆"),
  subtitle: "수상 실적 및 연구 활동",

  achievementsCards: [
    {
      title: "세종시 자율주행 AI 경진대회 3등",
      subtitle:
        "YOLOv8 및 U-Net 기반 객체 탐지 및 위험 분석 시스템 개발",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Award",
      footerLink: []
    },
    {
      title: "KIIECT 추계종합학술발표회 우수논문상",
      subtitle:
        "AI 기반 위험 감지 시스템 연구 논문 발표",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Paper Award",
      footerLink: []
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "HI",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
