import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './App.css';
import './equations.txt'
import raw from './equations.txt';
import graph from './sine.png';

let formulas = [];
fetch(raw)
    .then(r => r.text())
    .then(text => {
        formulas = text.split('%%');
        formulas.forEach(element => console.log(element));

    });

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="fullEq"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            style={{ backgroundColor: 'white' }}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}

        >
            {value === index && (
                <div sx={{ overflow: 'auto' }}>
                    {children}
                </div>
            )}

        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const allPanels = formulas.map((equation, index) =>
        <TabPanel value={value} index={index} key={index}>
            <MathJaxContext>
                <MathJax>
                    <div>
                        {equation}
                    </div>
                </MathJax>
            </MathJaxContext>
        </TabPanel>
    );

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div className="tabDiv">
                <Tabs
                    orientation="vertical"
                    style={{  position: '-webkit-sticky', position: 'sticky', top: '0', backgroundColor: 'white', borderBottomColor: '#e4e4e4' }}
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 0, borderColor: 'divider' }}
                >
                    <Tab label="Sposób 1" {...a11yProps(0)} />
                    <Tab label="Sposób 2" {...a11yProps(1)} />
                    <Tab label="Sposób 3" {...a11yProps(2)} />
                    <Tab label="Sposób 4" {...a11yProps(3)} />
                    <Tab label="Sposób 5" {...a11yProps(4)} />
                    <Tab label="Sposób 6" {...a11yProps(5)} />
                    <Tab label="Sposób 7" {...a11yProps(6)} />
                </Tabs>
            </div>
            {allPanels}
            <TabPanel value = {value} index={6}><img src={graph} /></TabPanel>
        </div>
    );
}
