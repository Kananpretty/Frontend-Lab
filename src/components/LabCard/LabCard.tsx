import { Link } from "react-router-dom";
import "./LabCard.css";

type LabCardProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

const LabCard = ({ title, description, icon, href }: LabCardProps) => {
  return (
    <Link to={href} className="lab-card">
      <div className="lab-card-header">
        <span className="lab-card-icon">
          <img src={icon} alt="" aria-hidden="true" className="lab-logo" />
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </Link>
  );
};

export default LabCard;
