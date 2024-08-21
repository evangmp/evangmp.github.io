import {CSSProperties} from "react";

const Home = () => {

    // CSS properties
    const homeStyle: CSSProperties = {
        backgroundColor: "#e8d783",
        width: "inherit",
        height: "10rem",
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space items horizontally
        padding: '20px', // Optional: Add some padding for better spacing
    };

    const profileButton: CSSProperties = {
        width: '6rem',
        height: '4rem',
    };

    return (
        <div style={homeStyle}>
            <p style={{color: "black"}}>[un nom plutôt stylé]</p>
                <div style={homeStyle}>
                        <button>
                            <img src={"src/assets/Default_pfp.svg.png"} alt={"default profile"}
                                 style={profileButton}/>
                        </button>
                </div>
        </div>
    )
};

export default Home;