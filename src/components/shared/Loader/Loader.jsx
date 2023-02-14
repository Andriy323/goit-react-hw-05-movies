import css from './loader.module.css'
const Loader = () =>{
return(
    <div className={css.overlay}><span className={css.loader}></span></div>

)
} 

export default Loader