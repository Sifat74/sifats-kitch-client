import banner from "../../assets/banner.jpg"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }} className="w-full min-h-dvh">

        </div>
    );
};
export default Banner;