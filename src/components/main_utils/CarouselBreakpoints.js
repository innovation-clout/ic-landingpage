export default function responsiveBreakpoints(superLargeItems, desktopItems, tabletItems, mobileItems) {
    const responsive =
      {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: superLargeItems
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: desktopItems
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: tabletItems
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: mobileItems
        }
      }
  
    return responsive
  }