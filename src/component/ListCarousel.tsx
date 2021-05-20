import { listCityFind } from "action/ListFindAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "../css/ListCarousel.scss";

const ListCarousel = () => {
  let dispatch = useDispatch();
  const [cityIdx, setCityIdx] = useState(0);

  useEffect(() => {
    dispatch(listCityFind(citys[cityIdx].name));
    console.log(citys[cityIdx].name);
  }, [cityIdx]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 5,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setCityIdx(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let citys = [
    { id: 1, name: "서울", img: "https://source.unsplash.com/6GD5HsrThQ8" },
    { id: 2, name: "경기도", img: "https://source.unsplash.com/VBzcdA--u0Y" },
    { id: 3, name: "인천", img: "https://source.unsplash.com/1cpiF66YKZU" },
    { id: 4, name: "강원도", img: "https://source.unsplash.com/aBCMk8SibVk" },
    { id: 5, name: "충청북도", img: "https://source.unsplash.com/gQi3ZNblkrA" },
    { id: 6, name: "충청남도", img: "https://source.unsplash.com/IDDeAGfs-Gk" },
    { id: 7, name: "대전", img: "https://source.unsplash.com/MkXc9iEiJwM" },
    { id: 8, name: "전라북도", img: "https://source.unsplash.com/9im7JmZKDpY" },
    { id: 9, name: "전라남도", img: "https://source.unsplash.com/el4I_FaKItE" },
    { id: 10, name: "광주", img: "https://source.unsplash.com/GhHZEUChJug" },
    {
      id: 11,
      name: "경상북도",
      img: "https://source.unsplash.com/-s9VRbT1aeg",
    },
    {
      id: 12,
      name: "경상남도",
      img: "https://source.unsplash.com/PYDbshp0I_o",
    },
    {
      id: 13,
      name: "대구",
      img: "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDFfNTAg/MDAxNDg4MzY2MDE1MDIw.94QqBFF0RotbNFMIfPQANSQQoPzK0GJUU-ukj8vCoX4g.2mysmioGPo7DYukVqiG6kuFlpZxVApaveVuerj10-b4g.JPEG.potato00214/DSC00680.JPG?type=w800",
    },
    { id: 14, name: "울산", img: "https://source.unsplash.com/f4q6OU_oCMg" },
    { id: 15, name: "부산", img: "https://source.unsplash.com/GPGPSfgdbbg" },
    { id: 16, name: "제주", img: "https://source.unsplash.com/4XoCxdMnWFg" },
  ];

  const cityList = citys.map((city, idx: number) => {
    if (city !== null) {
      return (
        <div
          className={idx === cityIdx ? "activeSlide" : "slide"}
          key={city.id}
        >
          <div className="slideWrapper">{city.name}</div>
          <img className="slideImg" src={city.img} />
        </div>
      );
    }
    return null;
  });

  return (
    <div className="listCarousel">
      <Slider {...settings}>{cityList}</Slider>
    </div>
  );
};

export default ListCarousel;
