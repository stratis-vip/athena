import {useSelector} from "react-redux";
import {BeatLoader} from "react-spinners";
import {useEffect} from "react";

const Spinner = () => {
    const netState = useSelector(state=> state.netState.server)
    useEffect(()=>{
        console.log('Spinner state:', netState)
    },[netState])

    if (netState === "ready" || netState === "error") {return null} else {
        return (<>
            <BeatLoader loading={true} />
                <div>loading...</div>
            </>
        )
    }
}

export default Spinner
