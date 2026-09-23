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
      "https://github.com/Kananpretty/React-Challenges/tree/main/src/challenges/rc01-counter",
    liveDemo:
      "https://react-challenges-playground.vercel.app/challenges/counter",
    concepts: ["useState", "useRef"],
  },
];
