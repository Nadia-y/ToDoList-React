import React from 'react';

const MainLayout = (props) => {
    return (
        <div className="wrapper">
    <p> developper is -{props.name}</p> 
    <p>my age -{props.age}</p> 
    <div>My friends :{props.friends.join(',')}</div>
        </div>
    )
}

export default MainLayout;