import React from 'react'

const Navbar = ({ filterItem, infoList }) => {
    return (
        <>
            <nav className='navbar1'>
                <div className="btn-group1">
                    {infoList.map((curEle) => {
                        return (
                            <button className="btn-group-item1" onClick={() => filterItem(curEle)}>{curEle}</button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar