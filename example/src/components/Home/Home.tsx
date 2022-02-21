import ReactMarkdown from "react-markdown";
import { md } from "./markdown-content";

function Home(): JSX.Element {
  return <ReactMarkdown>{md}</ReactMarkdown>;
}

export default Home;
