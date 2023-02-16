import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  //doing it for using it for id
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //remove space
  //ts can not know we convert it. use "as" SelectedPage force it, tell ts treat lowercasepage as SelectedPage type

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
