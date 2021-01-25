import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    stepper: {
        backgroundColor: '#ffffff'
    },
    layout: {
        width: '100%',
        margin: '300px auto',
        position: 'absolute',
    },
    paper: {
        boxShadow: 'none',
        backgroundColor: '#ffffff',
        height: '100%',
        width: '80%',
        maxWidth: '800px',
        margin: '0 auto',
        overflowX: 'hidden',
        paddingBottom: '100px'
    }
}));