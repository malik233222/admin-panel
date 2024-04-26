import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './single.scss'



const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Single = () => {
    return (
        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img src="data:image/png;base64,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" alt="" />
                        <h1>Johm AE</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        <div className="item">
                            <div className="itemTitle">Username:</div>
                            <div className="itemValue">John Doe</div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Username:</div>
                            <div className="itemValue">John Doe</div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Username:</div>
                            <div className="itemValue">John Doe</div>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart >
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                <ul>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                            <time>10 day ago</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                            <time>10 day ago</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                            <time>10 day ago</time>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Single