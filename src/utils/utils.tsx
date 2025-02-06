export const fetchLatLongAtOnce = async (data: any, getLatLong: any) => {
    const region = await Promise.all(

        data?.map(async (details: any) => {
            const { id, region, data } = details;

            const detail = await getLatLong(region)
            const regionDetail: any = {}
            regionDetail.id = id;
            regionDetail.region_name = detail?.data[0].display_name
            regionDetail.lat = detail?.data[0].lat
            regionDetail.lon = detail?.data[0].lon
            regionDetail.data = data

            return regionDetail
        })
    )
    return region
}



export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        width: '500px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
};