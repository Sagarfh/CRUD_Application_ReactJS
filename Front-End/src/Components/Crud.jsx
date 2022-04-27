import { Box, makeStyles, Typography } from '@material-ui/core';
import "../Assets/bootstrap/css/bootstrap.css";
import home3 from '../Assets/images/home3.png';
import home2 from '../Assets/images/home2.png';
import home1 from '../Assets/images/home1.png';

const useStyle = makeStyles({
    image: {
        width: '60%',
        height: '60%',
        paddingBottom: '2%'
    },
    component: {
        margin: '5vw',
        textAlign: 'center',
        textTransform: 'bold'
    },
    component1: {
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'left',
        textTransform: 'bold'
    }
})

const Crud  = () => {
    const classes = useStyle();
    return(
        <Box className={classes.component}>
            <Typography variant="h2" style={{marginBottom:50}}>CRUD APPLICATION</Typography>
            <hr/>
            <Box>

                <div className={classes.component1}>
                    <h3>MERN Stack</h3>
                </div>

                <img className={classes.image} src={home1} />
                
                <br/>
                <div className={classes.component1}>
                    <h3>What is the MERN Stack?</h3>
                    <a>MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.</a>
                    <ul>
                        <li>MongoDB - document database</li>
                        <li>Express(.js) - Node.js web framework</li>
                        <li>React(.js) - a client-side JavaScript framework</li>
                        <li>Node(.js) - the premier JavaScript web server</li>
                    </ul>
                </div>
                <br/>
            </Box>

            <hr/>

            <Box>
                
                <div className={classes.component1}>
                    <h3>MERN Stack Flow</h3>
                </div>
                <img className={classes.image} src={home3} />
            </Box>

            <hr/>

            <Box>
                <div className={classes.component1}>
                    <h3>MERN Stack Architecture</h3>
                </div>

                <img className={classes.image} src={home2} />
            </Box>
        </Box>
    )
}

export default Crud;