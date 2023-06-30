interface VisitorCntType {
    adult: number;
    child: number;
    setAdult: any;
    setChild: any;
}

const VisitorCnt = ({ adult, child, setAdult, setChild }: VisitorCntType) => {
    const incAdult = (): void => {
        setAdult(adult + 1);
    }
    const decAdult = () => {
        adult > 0 ? setAdult(adult - 1) : setAdult(0);
    }
    const incChild = () => {
        setChild(child + 1);
    }
    const decChild = () => {
        child > 0 ? setChild(child - 1) : setChild(0);
    }
    return (
        <div className="d-flex align-items-center btn-group mx-2" role="group">
            <label htmlFor="">Adults:</label>
            <button type="button" className="btn p-2" onClick={incAdult}>+</button>
            <span>{adult}</span>
            <button type="button" className="btn p-2" onClick={decAdult}>-</button>
            <label htmlFor="" className='ml-3'>Children:</label>
            <button type="button" className="btn p-2" onClick={incChild}>+</button>
            <span>{child}</span>
            <button type="button" className="btn p-2" onClick={decChild}>-</button>
        </div>
    )
}

export default VisitorCnt
