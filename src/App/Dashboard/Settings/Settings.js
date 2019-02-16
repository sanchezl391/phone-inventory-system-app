import React, {useState} from 'react';
import './Settings.scss';

let Settings = (props) => {
    let [isDialogOpen, setIsDialogOpen] = useState(false);
    let mode = props.modeManager.timeMode;
    
    let isModeActive = (value) => {
        if(mode === value)
            return 'active selector';
        else    
            return 'selector';
    };

    let dialogJsx = (isDialogOpen) ? <div className="dialog-container">
        <i 
            onClick={() => setIsDialogOpen(false)}
            className="fas fa-times lg-txt"></i>
        <h3>Set Time Mode</h3>
        <div className="mode-value-container">
            <div 
                onClick={() => props.modeManager.setTimeMode('day')}
                className={isModeActive('day')}></div>
            <p>day</p>
        </div>
        <div className="mode-value-container">
            <div 
                onClick={() => props.modeManager.setTimeMode('week')}
                className={isModeActive('week')}></div>
            <p>week</p>
        </div>
        <div className="mode-value-container">
            <div 
                onClick={() => props.modeManager.setTimeMode('month')}
                className={isModeActive('month')}></div>
            <p>month</p>
        </div>
    </div>:
    '';

    let html = <div className="settings-container">
        {dialogJsx}
        <i 
            className="fas fa-cog lg-txt"
            onClick={() => setIsDialogOpen(!isDialogOpen)}></i>
    </div>;
    return html;    
};

export default Settings;
