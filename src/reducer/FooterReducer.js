export const FooterReducer = (state = [{
    footImage: "https://apptech.com.tr/wp-content/uploads/2019/11/types-of-websites.jpg",
    footTitle: "Exaltech Sofware Peer Burhan lane No 1 Nanded",
    footDesc: "Web"
}],
    action) => {
    if (action.type === "ADD_FOOTER") {
        return [...state, action.payload]
    } else return state;
};