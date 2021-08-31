import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export const Gallery = ({ gallery }) => {
  const pictures = [
    {
      title1: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title2: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title3: "スナックむらむすび、始まります",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
    },
    {
      title1: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title2: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title3: "スナックむらむすび、始まります",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
    },
    {
      title1: "スナックむらむすび、始まります",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
      title2: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title3: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="gallery" className="mt-48 pt-24 text-mulunchGray text-center bg-gaBackground bg-center bg-cover">
      <h3 className="text-6xl -mt-96">Photo Gallery</h3>
      <div>
        <ul className="flex justify-center items-center mt-6 w-full">
          <button className="mx-auto p-2 rounded-full border bg-white font-bold text-mulunchGray shadow cursor-pointer hover:opacity-40" onClick={prevSlide}>
            <IoIosArrowDropleft size={24} />
          </button>
          {pictures.map((picture, index) => (
            <li key={index}>
              {index === current && (
                <div className="flex justify-center items-center mt-6 w-full">
                  <article className="mx-4 cursor-pointer hover:opacity-60">
                    <Image
                      src={picture.image1}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p className="absolute text-white -mt-6 mx-auto w-96 text-shadow-xl">{picture.title1}</p>
                  </article>
                  <article className="mx-4 cursor-pointer hover:opacity-60">
                    <Image
                      src={picture.image2}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p className="absolute text-white -mt-6 mx-auto w-96 text-shadow-xl">{picture.title2}</p>
                  </article>
                  <article className="mx-4 cursor-pointer hover:opacity-60">
                    <Image
                      src={picture.image3}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p className="absolute text-white -mt-6 mx-auto w-96 text-shadow-xl">{picture.title3}</p>
                  </article>
                </div>
              )}
            </li>
          ))}
          <button className="mx-auto p-2 rounded-full border bg-white font-bold text-mulunchGray shadow cursor-pointer hover:opacity-40" onClick={nextSlide}>
            <IoIosArrowDropright size={24} />
          </button>
        </ul>
      </div>
    </section>
  );
};
