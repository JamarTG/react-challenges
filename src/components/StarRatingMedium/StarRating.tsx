import { Star } from "lucide-react";
import { useState } from "react";

const STAR_FILL_COLOR = "yellow";
const MAX_NUMBER_OF_STARS = 5;

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverPreviewRating,setHoverPreviewRating] = useState(0);

  return (
    <>
      {[
        [...new Array(MAX_NUMBER_OF_STARS)].map((_, index) => {
          return (
            <Star
              onMouseOver={() => setHoverPreviewRating(index + 1)}
              onMouseOut={() => setHoverPreviewRating(0)}
              onClick={() => setRating(index + 1)}
              fill={
                index < rating || index < hoverPreviewRating
                  ? STAR_FILL_COLOR
                  : "transparent"
              }
            />
          );
        }),
      ]}
    </>
  );
};

export default StarRating;
