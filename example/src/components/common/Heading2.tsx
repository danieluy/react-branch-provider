import { useBranchState } from "react-branch-provider";
import { themeProvider } from "../../theme.provider";

interface Props {
  children: string;
}

function Heading2({ children }: Props) {
  const { primaryColor } = useBranchState(themeProvider);

  return <h2 style={{ color: primaryColor, marginBottom: 16 }}>{children}</h2>;
}

export default Heading2;
