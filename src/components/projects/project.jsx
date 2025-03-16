import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/project.css";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

const techLogoMapping = {
	React: "devicon-react-original-wordmark colored",
	"Tailwind CSS": "devicon-tailwindcss-original colored",
	Redux: "devicon-redux-original colored",
	HTML: "devicon-html5-plain-wordmark colored",
	CSS: "devicon-css3-plain-wordmark colored",
	"Socket.io": "devicon-socketio-original-wordmark colored",
	ExpressJS: "devicon-express-original-wordmark colored",
	MongoDB: "devicon-mongodb-plain-wordmark colored",
	NodeJS: "devicon-nodejs-plain-wordmark colored",
};

const Project = ({ project }) => {
	const { logo, title, description, link, techStack, sourceLink } = project;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
						}}
					>
						<div className="project-title">{title}</div>
						<Link
							className="project-link"
							to={link}
							target="_blank"
						>
							<div className="project-link-icon">
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</div>
						</Link>
						<Link
							className="project-link"
							to={sourceLink}
							target="_blank"
						>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
						</Link>
					</div>
					<div className="project-description">{description}</div>
					<div className="project-tech-stack">
						<p style={{ fontWeight: 600 }}>Tech Stack:</p>
						<div className="tech-stack-container">
							{techStack?.map((tech) => (
								<i class={techLogoMapping[tech]} title={tech} />
							))}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
