interface IResponsiveSettings {
  slidesToShow: number;
  slidesToScroll: number;
  infinite?: boolean;
  dots?: boolean;
  initialSlide?: number;
}

interface IResponsive {
  breakpoint: number;
  settings: IResponsiveSettings;
}

interface CarouselSettings {
  dots?: boolean;
  speed?: number;
  initialSlide?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrow?: boolean;

  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;

  responsive?: Array<IResponsive>;
}

export default CarouselSettings;
