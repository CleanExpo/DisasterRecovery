import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

interface RoadmapProps {
  content: string;
}

const Roadmap: React.FC<RoadmapProps> = ({ content }) => (
  <div className="prose mx-auto p-6">
    <h1>Disaster Recovery QLD Roadmap</h1>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'roadmap.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return { props: { content } };
};

export default Roadmap;
