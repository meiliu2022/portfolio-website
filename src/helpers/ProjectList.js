import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.PNG";
import Proj1g from "../assets/demo_eCommerce.gif";
import Proj2g from "../assets/demo_expense.gif";
import Proj3g from "../assets/demo_sorting.gif";

export const ProjectList = [
  {
    name: "E-commerce Website",
    image: Proj1,
    gif: Proj1g,
    skills: "Angular, Spring Boot, MySQL",
    description:"A full stack e-commerce application with Angular front-end and Spring Boot back-end, using REST APIs and MySQL database. Okta Sign-in Widget is used to authenticate users while the Stripe API is applied for credit card payments.",
    learningPoints:" This project takes up a lot of time and energy. I learn a lot about how to integrate backend with frontend as well a lot about user security, authentication, etc.",
    codeUrl: "https://github.com/meiliu2022/ecommence-website"
  },
  {
    name: "Personal Expense",
    image: Proj2,
    gif: Proj2g,
    skills: "Flutter, Dart, Sqlflite",
    description:"A very interested and convenience mobile App to record your expense anytime, with an expense tracking line displaying daily expense.",
    learningPoints:"This is the first Flutter App I developed applying Sqlflite to store persistence data. I find that Flutter can be more agile for developer to design and create App.",
    codeUrl: "https://github.com/meiliu2022/personal-expense"
  },
  {
    name: "Sorting Visualization",
    image: Proj3,
    gif: Proj3g,
    skills: "Android, Java",
    description:"An Android App with animations displaying seven sorting algorithms processes.  I made this visualizer in order to deeply understand the fundamentals of sorting algorithms. ",
    learningPoints:"My favorite one is merge sorting and it is also the most difficult one, when considering two separate arrays are required to do sorting work. I am so happy to find a solution finally.",
    codeUrl: "https://github.com/meiliu2022/sorting-visualization"
  },
];
