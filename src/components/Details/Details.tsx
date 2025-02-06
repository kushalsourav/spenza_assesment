import "./Details.css";

const Details = ({ region }: any) => {

    return (

        <div className="details-card">
            <ul className="details-card-list">
                <li className="details-card-item">
                    <h3>Country</h3>
                    <h4>data</h4>
                </li>
                {region?.map((region: any) => <li className="details-card-item">
                    <h3>{region.region_name}</h3>
                    <h4>{region.data}</h4>
                </li>)}
            </ul>
        </div>

    )
}


export default Details