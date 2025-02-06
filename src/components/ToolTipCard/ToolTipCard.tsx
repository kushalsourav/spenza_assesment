import './ToolTipCard.css';

interface ToolTipCard {
    region_name: string;
    data: number;
    lon : number;
    lat : number
}


const ToolTipCard = ({region_name, data, lon, lat} : ToolTipCard)  => {

    return (
        <>
        <div className='card' key={region_name}>
            <h2 className="card-heading">{region_name}</h2>

            <p className='card-info'>{data}</p>
            <ul className='card-list'> 
                <li className="card-list-item">Lon {lon}</li>
                <li className="card-list-item">Lat {lat}</li>
            </ul>
        </div>
        </>
    )
}


export default ToolTipCard;