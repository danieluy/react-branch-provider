import ReactMarkdown from "react-markdown";
import "./Home.css";
import { md } from "./markdown-content";

function Home(): JSX.Element {
  return <ReactMarkdown className="md">{md}</ReactMarkdown>;
}

export default Home;
