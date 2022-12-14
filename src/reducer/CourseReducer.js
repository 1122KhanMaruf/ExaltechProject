export const CourseReducer =
    (state = [
        {
    cardImage: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
    cardTitle: "HTML",
    cardDesc: "Hyper Text Markup Language",
    
},
{
    cardImage: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    cardTitle: "CSS",
    cardDesc: "Cascading Style Sheet",
},
{
    cardImage: "https://play-lh.googleusercontent.com/PAPuQveK8eeVwh7M4vccotAFPOJI0sENMWxnFe9RDt-_63SfVRiLUNXcpJ-8iHuVng",
    cardTitle: "JS",
    cardDesc: "JavaScript",
},
],
    action) => {
    if (action.type === "ADD_COURSES") {
        return [...state, action.payload];
    } else return state;
};