import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { useNearScreen } from "../../hooks/useNearScreen";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const Photocard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  const key = `liked-${id}`;
  //   const [liked, setLiked] = useLocalStorage(key, false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(
        // receives a function to run actions to entries that are in the viewport
        // and are being observed
        function (entries) {
          const { isIntersecting } = entries[0]; // is visible on the viewport
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        }
      );
      observer.observe(element.current); // the element we want to observe
    });
  }, [element.current]);

  const Icon =
    //liked ? MdFavorite :
    MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/petgram/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button
            onClick={() =>
              // setLiked(!liked)
              alert("pressed!")
            }
          >
            <Icon size="32px" />
            {/* {likes} */}3 likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
