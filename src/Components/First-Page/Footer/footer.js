import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge , gaugeClasses } from '@mui/x-charts/Gauge';
import React from 'react'
import './footer.css'
import { IoHome } from "react-icons/io5";
import { FaUserNinja } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function footer() {
  return (
<>
<footer className='FooterDivOrgParent'>
        <div className="FooterDivOrgChildesComment">
            <h1>
                Comment Form
            </h1>
            <input placeholder='Name' className='inpFooterComment' type="text"/>
            <input placeholder='Email' className='inpFooterComment' type="text"/>
            <textarea placeholder='Text About' className='textareaParentFooter' type="text"/>
            <button className='btnFooterComment'>send</button>
        </div>
        <div className="FooterDivOrgChildesNavBar">
            <ul>
                <Link to={'/G-user'}><li className="liNavlinkHeader1"><div className='IconPublicInWeb iconNavHeader'><IoHome size={17}></IoHome></div>Home</li></Link>
                <Link to={'/about'}><li className="liNavlinkHeader2"><div className='IconPublicInWeb iconNavHeader'><FaUserNinja size={17}></FaUserNinja></div>About</li></Link>
                <Link to={'/cotactus'}><li className="liNavlinkHeader3"><div className='IconPublicInWeb iconNavHeader'><MdOutlineContactSupport size={17}></MdOutlineContactSupport></div>Contact</li></Link>
                <Link to={'/control'}><li className="liNavlinkHeader4"><div className='IconPublicInWeb iconNavHeader'><FaUsers size={17}></FaUsers></div>Controler</li></Link>
            </ul>
        </div>
        <div className="FooterDivOrgChildesChart">
        <PieChart
            width={300}
            height={300}
            series={[
                {
                data: [ 
                    { id: 0, value: 90, label: 'User',color:'rgb(251, 213, 99)'},
                    { id: 1, value: 15, label: 'Admin',color:'rgb(251, 99, 215)' },
                    { id: 2, value: 1, label: 'Manufacturer',color:'black' },
                    { id: 3, value: 50, label: 'Manager',color:'rgb(72, 170, 255)' },
                    ],
                    innerRadius: 100,
                    outerRadius: 50,
                    paddingAngle: 3,
                    cornerRadius: 3,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 150,
                    cy: 150,
                    }
            ]}
        />
        <h1>All User</h1>
        </div>
    </footer>
    <div className='VersionAndCopyRight'>
{'        The generated content is absolute to (oghosto-M)_V=>1.0'}
    </div>
</>
  )
}
