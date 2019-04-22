let getBrandStyle = (brand) => {
    return import(`../styles/${brand}.style.css`);
};
export default getBrandStyle;