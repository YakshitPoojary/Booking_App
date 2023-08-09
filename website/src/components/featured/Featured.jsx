import './featured.css'

const Featured = () => {
    return(
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1565464089519-da4089e07759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1565464089519-da4089e07759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>456 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1565464089519-da4089e07759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>789 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured