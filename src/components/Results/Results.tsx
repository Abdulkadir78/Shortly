import { useState } from "react";

import { Url } from "../../TS-models/models";
import ResultCard from "./ResultCard";
import Button from "../UI/Button";

const Results: React.FunctionComponent<{ urls: Url[] }> = ({ urls }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore((prevValue) => !prevValue);
  };

  return (
    <div className="container md:w-10/12">
      {!!urls.length && (
        <>
          {(urls.length > 3 && !showMore ? urls.slice(0, 3) : urls).map(
            (url) => (
              <ResultCard
                key={url.id}
                id={url.id}
                originalUrl={url.originalUrl}
                shortUrl={url.shortUrl}
              />
            )
          )}

          {urls.length > 3 && (
            <div className="text-center mt-10">
              <Button onClick={handleToggleShowMore} outlined>
                Show {showMore ? "Less" : "More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Results;
