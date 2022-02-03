import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Url } from "../../TS-models/models";
import Button from "../UI/Button";

const ResultCard: React.FunctionComponent<Url> = ({
  originalUrl,
  shortUrl,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className="bg-white font-medium rounded-md p-5 mt-12 md:-mt-3 lg:mt-8 lg:flex justify-between items-center">
      <div className="lg:text-lg lg:w-5/12">
        <h4 className="truncate">{originalUrl}</h4>
        <div className="border-b-2 -mx-5 pt-2 lg:hidden"></div>
      </div>

      <div className="lg:w-4/12">
        <h4 className="text-primary mt-5 lg:mt-0 lg:text-lg truncate">
          {shortUrl}
        </h4>
      </div>

      <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
        <Button
          variant={isCopied ? "primary2" : "primary"}
          className="lg:w-2/12 mt-4 lg:mt-0"
          fullWidth
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default ResultCard;
