import { useContext } from "react";
import { DashBoardContext } from '../context/DashBoardProvider';

const useDashBoard = () => {
    return useContext(DashBoardContext);
}

export default useDashBoard;