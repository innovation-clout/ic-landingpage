import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RightArrow from "../../images/carousel-r-arrow.svg";
import LeftArrow from "../../images/carousel-l-arrow.svg";



const CustomCarousel = ({
  children,
  CarouselClass,
  breakpoints,
  position,
  length,
}) => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className={`absolute flex flex-row ${length} justify-between`}
        style={position}
      >
        <div
          className={
            currentSlide === 0
              ? "disable h-10 w-12 bg-no-repeat bg-contain"
              : "h-10 w-12 bg-no-repeat bg-contain"
          }
          style={{ backgroundImage: `url(${LeftArrow})` }}
          onClick={() => previous()}
        />
        <div
          onClick={() => next()}
          className="h-10 w-12 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${RightArrow})` }}
        />
      </div>
    );
  };

  return (
    <Carousel
      className={CarouselClass}
      responsive={breakpoints}
      renderButtonGroupOutside={true}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
