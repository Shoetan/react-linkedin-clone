const InputOption = ({Icon, title,color}) => {
    return ( 
        <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer gap-2 font-Nunito">
          <Icon style ={{color: color}} />
          <h4>{title}</h4>
        </div>
     );
}
 
export default InputOption;