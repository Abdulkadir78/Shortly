import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "./UI/Button";
import backgroundImage from "../assets/images/bg-shorten.svg";

const expression =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const urlRegex = new RegExp(expression);

const ShortenerForm: React.FunctionComponent<{ handleRefresh: () => void }> = ({
  handleRefresh,
}) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    error && setError("");
    setUrl(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const finalUrl = url.trim();

    if (!finalUrl) {
      setError("Please add a link");
      setLoading(false);
      return;
    }
    if (!finalUrl.match(urlRegex)) {
      setError("Please enter a valid url");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${finalUrl}`
      );
      const result = await response.json();
      if (!result.ok) {
        throw new Error(result.error);
      }

      const shortenedUrl = result.result.full_short_link;
      const urls = JSON.parse(localStorage.getItem("urls") || "[]");

      localStorage.setItem(
        "urls",
        JSON.stringify([
          { id: uuidv4(), originalUrl: finalUrl, shortUrl: shortenedUrl },
          ...urls,
        ])
      );

      setUrl("");
      handleRefresh();
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container absolute -top-16 sm:left-[50%] sm:-translate-x-[50%] md:w-10/12">
      <div
        className="w-full md:h-36 p-5 md:p-10 rounded-lg bg-primary2"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <form onSubmit={handleSubmit} className="md:flex justify-around">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`w-full outline-none border-2 p-3 rounded-md ${
                error && "border-red-400 placeholder:text-red-400"
              }`}
              disabled={loading}
              value={url}
              onChange={handleChange}
            />

            {error && (
              <p className="text-red-500 text-sm mt-1 italic">{error}</p>
            )}
          </div>

          <div className="text-center mt-4 md:mt-0.5 md:ml-3">
            <Button
              type="submit"
              className="flex items-center justify-center"
              fullWidth
              disabled={loading}
            >
              {loading && (
                <div className="animate-spin rounded-full h-5 w-5 border-4 border-t-transparent border-white mr-1"></div>
              )}
              {loading ? "Shortening" : "Shorten it!"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShortenerForm;
