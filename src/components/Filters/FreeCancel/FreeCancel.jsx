import "./FreeCancel.css"
import { useFilter} from "../../../context"


export const FreeCancel = () => {
    const {filterDispatch,isCancelable} = useFilter();

    console.log(isCancelable);
    

    const handleCancelable = (event) => {
        filterDispatch({
            type:"CANCALABLE",
            payload:event.target.checked

        })
    }
    return (
        <div className="filter-container">
        <div className="d-flex align-center gap-larger">
        <span className="filter-label">Free Cancelation</span>
        <label className="slide">
        <input type="checkbox" onChange={handleCancelable} value={isCancelable} checked={isCancelable}/ >
        <span className="slider round"></span>
        </label>
        </div>
        </div>
    )
}