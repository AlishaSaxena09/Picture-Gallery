import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/class";
import { Context } from "../Context";

export default function Photos() {
  const { allPhotos } = useContext(Context);
  const images = allPhotos.map((img, i) => {
    return <Image img={img} key={img.id} className={getClass(i)} />;
  });

  return (
    <div className="grid grid-cols-3 gap-px p-4 auto-rows-min">{images}</div>
  );
}
