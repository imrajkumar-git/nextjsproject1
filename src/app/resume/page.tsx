import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view my resume",
};

/**
 * Resume page component
 * Server component for optimal performance
 */
const Resume = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="resume/resume.pdf"
        width="100%"
        height="100%"
        title="Rajkumar Resume"
      />
    </div>
  );
};

export default Resume;


