import { siteConfig } from "../data/content";
import { Icon } from "./Icons";

export function PrintButton() {
  return <a className="button button-secondary" href={`${siteConfig.cvUrl}#toolbar=1`} target="_blank" rel="noreferrer" aria-label="Open original CV in a new tab to print">
    <Icon name="print" /> Open CV to print
  </a>;
}
