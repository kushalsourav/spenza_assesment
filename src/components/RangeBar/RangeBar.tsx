import { useState } from "react";
import { Range } from "react-range";

const RangeBar = ({ region }: any) => {
    const [value, setValue] = useState([0]);
    let maxValue: any
    let gradientColors: any
    if (region.length > 1) {
        maxValue = region?.reduce((acc: { data: any; }, cuur: { data: any; }) => acc + cuur.data, 0)
    }
    const calculateColorIntensity = (data: number) => {
        const intensity = maxValue ? 1 - data / maxValue : 1;
        const lightness = 20 + intensity * 60;
        return `hsl(240, 100%, ${lightness}%)`;
    };
    if (region.length > 1) {
        gradientColors = region?.map(
            (region: any) => calculateColorIntensity(region.data)
        ).reverse();

    }

    return (
        <div style={{ width: "800px", margin: "20px auto", textAlign: "center" }}>
            <Range
                values={value}
                step={1}
                min={0}
                max={maxValue}
                onChange={(values) => setValue(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            backgroundImage: `linear-gradient(to right, ${gradientColors?.join(
                                ", "
                            )})`,
                        }}
                    >
                        {children}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                position: "absolute",
                                top: "10px",
                                width: "100%",
                            }}
                        >
                            {region?.map((item: any, index: number) => {
                                const percentage = ((item.data / (maxValue || 1)) * 100).toFixed(1);
                                return (
                                    <div key={index} style={{ fontSize: "12px", color: "#fff" }}>
                                        {percentage}%
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                        }}
                    />
                )}
            />

        </div>
    );
};

export default RangeBar;
