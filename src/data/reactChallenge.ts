type ReactChallenge = {
  id: number;
  title: string;
  status: string;
  githubLink: string;
  liveDemo: string;
  concepts: readonly string[];
  description?: string;
};

export const reactChallenges: readonly ReactChallenge[] = [
  {
    id: 1,
    title: "Counter",
    status: "Completed",
    description:
      "Learn the difference between useState and useRef by creating two counters and observing how state and refs affect component rendering.",
    githubLink:
      "https://github.com/kanan-mehta/React-Challenges/tree/main/src/challenges/rc01-counter",
    liveDemo:
      "https://react-challenges-playground.vercel.app/challenges/counter",
    concepts: ["useState", "useRef"],
  },
  {
    id: 2,
    title: "To Do List",
    status: "Completed",
    description:
      "Create a simple ToDo list app with add, delete, complete, clear completed, and bulk task actions.",
    githubLink:
      "https://github.com/kanan-mehta/React-Challenges/tree/main/src/challenges/rc02-to-do-list",
    liveDemo:
      "https://react-challenges-playground.vercel.app/challenges/toDoList",
    concepts: ["useState", "Array Methods", "Controlled Input"],
  },
  {
    id: 3,
    title: "Uncontrolled Form",
    status: "Completed",
    description:
      "Create an uncontrolled form with default values and display the submitted data using the browser's FormData API.",
    githubLink:
      "https://github.com/kanan-mehta/React-Challenges/tree/main/src/challenges/rc03-uncontrolled-form",
    liveDemo:
      "https://react-challenges-playground.vercel.app/challenges/uncontrolledForm",
    concepts: [
      "FormData",
      "Uncontrolled Inputs",
      "defaultValue",
      "Reusable Components",
    ],
  },
];
