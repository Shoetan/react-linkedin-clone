const HeaderOption = ({Icon, title}) => {
    return ( 
        <div className="flex items-center flex-col cursor-pointer text-gray-500 hover:text-stone-900">
            {Icon && <Icon className=""/>}
            <h3>{title}</h3>
        </div>
     );
}
 
export default HeaderOption;