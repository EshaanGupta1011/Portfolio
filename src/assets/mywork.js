import project1_img from "../assets/project_1.png";
import project2_img from "../assets/project_2.png";
import project3_img from "../assets/project_3.png";
import project4_img from "../assets/project_4.png";

const mywork = [
  {
    w_no: 1,
    text: "Food delivery web application",
    img: project4_img,
    link: "https://dinedash101.netlify.app/",
    accordionItems: [
      {
        title: "Know more ↓",
        content:
          "I developed DineDash, an online food delivery web application using the MERN stack and integrated Stripe for payment processing. The backend is hosted on Render, while the frontend is deployed on Netlify. Additionally, there's an admin panel for managing data entry and order processing.",
      },
    ],
  },
  {
    w_no: 2,
    text: "Sign Language to Text/Speech",
    img: project3_img,
    link: "https://github.com/EshaanGupta1011/Korero",
    accordionItems: [
      {
        title: "Know more ↓",
        content:
          "I developed this project as a part of SRM Hackathon 8.0 project. The idea was to decrease the communication gap between the vocally impaired person and the society. It uses the concepts of convolutional neural networks. The dataset was created from scratch by our team using a program. We got 3rd position for the same.",
      },
    ],
  },

  {
    w_no: 3,
    text: "Dant Villa Dental Clinic",
    img: project2_img,
    link: "https://dantvilla.com/",
    accordionItems: [
      {
        title: "Know More ↓",
        content:
          "Dant Villa Dental Clinic is located in two parts of Delhi. I developed a website for the clinic to increase their reach. I used my knowledge of ReactJs to build the website from scratch. I designed the whole website as well. It also lets users to enter their queries which would be sent to the doctor's email id.",
      },
    ],
  },

  {
    w_no: 4,
    text: "Guess the Number",
    img: project1_img,
    link: "https://github.com/EshaanGupta1011/GuessTheNumberGame",
    accordionItems: [
      {
        title: "Know more ↓",
        content:
          "I took this project to practice my skills and understanding of JavaScript. The project basically lets user to guess a number between 0 to 20. A random number is selected by the system. The goal is to guess the number in minimum number of tries. The program also alerts the user whether the number guessed by it is higher or lower than the correct answer.",
      },
    ],
  },
];

export default mywork;
