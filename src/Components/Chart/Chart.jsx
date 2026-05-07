"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = ({ res }) => {
    const data = [];
    const map = () => {
        res.ratings.map(rate => data.unshift(rate))
    }
    map()

    return (
        <>
            <div style={{ width: '100%', maxWidth: '100vw', maxHeight: "300px", aspectRatio: 1.618 }}>
                <h3 className='text-2xl font-semibold'>Ratings</h3>

                <ResponsiveContainer >
                    <BarChart
                        data={data}
                        layout="vertical"
                    >
                        <XAxis type="number" />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                        />

                        <Bar
                            dataKey="count"
                            fill="#ff8c00"
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div >

        </>
    );
};

export default Chart;