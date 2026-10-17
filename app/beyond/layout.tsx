import { BeyondNavigation } from "../components/BeyondNavigation";

export default function BeyondLayout({ children }: { children: React.ReactNode }) {
  return <><BeyondNavigation />{children}</>;
}
