export const CarouselReducer = (state = [{
    carouselImage: "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-13/b8f81410-3d3c-11eb-892b-1727b307c367.jpg",
    carouselTitle: "First Slide",
    carouselDesc: "Carousel Image"
},
{
    carouselImage: "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/05/SPINX-Digital-Website-Design.png",
    carouselTitle: "Second Slide",
    carouselDesc: "Carousel Image"
},
{
    carouselImage: "https://www.classiblogger.com/wp-content/uploads/2020/08/Best-Tips-For-How-To-Design-A-Creative-Website-classiblogger.png",
    carouselTitle: "Third Slide",
    carouselDesc: "Carousel Image"
},
],
    action
) => {
    if (action.type === "ADD_CAROUSEL") {
        return [...state, action.payload];
    } else return state;
};

