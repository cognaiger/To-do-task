const LayoutMenu = ({children, className}) => {
    return (
        <div className={` fixed min-h-screen w-60 ${className}`}>
            {children}
        </div>
    )
}

export default LayoutMenu;