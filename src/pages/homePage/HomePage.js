import React, {useCallback} from "react";
import classes from "./style.module.css";
import {useHistory} from 'react-router-dom';
import ROUTES from '../../routes/RouteNames';




const HomePage = () => {
  const history = useHistory();
  const handleGoTo = useCallback(
    (pathToPage) => {
     history.push(pathToPage)
    },
    [history],
  )
  return (
    <div>
      <button onClick={() => handleGoTo(ROUTES.COUNTER_PAGE)} className={classes.buttonEnter}> Simple Counter-classe component </button>
      <button className={classes.buttonEnter}> Counter of Counters </button>
      <button onClick={()=> handleGoTo(ROUTES.NAD_PAGE)} className={classes.buttonEnter}> Training beginner </button>
      <button onClick={()=> handleGoTo(ROUTES.TO_DO)} className={classes.buttonEnter}> To Do List </button>
    </div>
  );
};
export default HomePage;
