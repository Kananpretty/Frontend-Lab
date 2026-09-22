import ChallengeIcon from "../../assets/challenge-logo.svg";
import "./ChallengeCard.css";

type ChallengeCardProps = {
  id: number;
  title: string;
  githubLink: string;
  liveDemo: string;
  concepts: readonly string[];
};

const ChallengeCard = ({
  id,
  title,
  githubLink,
  liveDemo,
  concepts,
}: ChallengeCardProps) => {
  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <span className="challenge-card-icon">
          <img
            src={ChallengeIcon}
            alt=""
            aria-hidden="true"
            className="challenge-logo"
          />
        </span>
        <h3>
          {id} {title}
        </h3>
      </div>
      <div className="challenge-tags">
        {concepts.map((concept) => {
          return <span className="challenge-tag">{concept}</span>;
        })}
      </div>
      <div className="challenge-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github Repo
        </a>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ChallengeCard;
