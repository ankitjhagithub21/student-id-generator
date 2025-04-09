
const Navbar = ({setTemplate,onDownload,onClear,isDownloadDisabled,setShowCards}) => {
    return (
        <header className="navbar bg-base-100 sticky top-0 w-full shadow-sm z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li onClick={()=>setShowCards(false)}><a>Home</a></li>
                        <li>
                            <a>Choose Template</a>
                            <ul className="p-2">
                                <li><a onClick={()=>setTemplate(1)}>Template 1</a></li>
                                <li><a onClick={()=>setTemplate(2)}>Template 2</a></li>
                            </ul>
                        </li>
                        <li onClick={()=>setShowCards(true)}><a>My Cards</a></li>
                    </ul>
                </div>
                <button className="btn btn-dark text-xl  md:block hidden">
                Smart Student Id Generator
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={()=>setShowCards(false)}><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Choose Template</summary>
                            <ul className="p-2">
                                <li onClick={()=>setTemplate(1)}><a>Template 1</a></li>
                                <li onClick={()=>setTemplate(2)}><a>Template 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li onClick={()=>setShowCards(true)}><a>My Cards</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button disabled={isDownloadDisabled} className="btn mx-2 btn-secondary" onClick={onDownload}>Download as Png</button>
                <button className="btn btn-warning" onClick={onClear}>Clear</button>
            </div>
        </header>
    )
}

export default Navbar