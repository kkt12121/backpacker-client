import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { listCityFind } from "action/ListFindAction";
import "../css/ContentCarousel.scss";
import { useParams } from "react-router";
import axios from "axios";
const ContentCarousel = () => {
  let dispatch = useDispatch();
  const [cityIdx, setCityIdx] = useState(0);
  const [contentItemData, setContentItemData] = useState<any>(null);
  let params = useParams();
  const test = () => {
    for (const [key, value] of Object.entries(params)) {
      //console.log(`${key}: ${value}`);
    }
  };
  test();
  const { id } = useParams<{ id?: string }>();
  useEffect(() => {
    dispatch(listCityFind(contentItemData?.place));
    // console.log(contentItemData[cityIdx].name);
  }, [cityIdx]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        setContentItemData(res.data.itemArr);
      });
    };
    fetchData();
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 1,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setCityIdx(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cityList = contentItemData?.map((city: any, idx: number) => {
    city.map((el: any) => {
      // console.log(el);
      return (
        <div
          className={idx === cityIdx ? "contentActiveSlide" : "contentSlide"}
          key={el.contentId}
        >
          <img className="contentSlideImg" src={el.img} />
        </div>
      );
    });
  });

  return (
    <div className="contentCarousel">
      <Slider {...settings}>{cityList}</Slider>
    </div>
  );
};

export default ContentCarousel;
