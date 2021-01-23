import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    hero: {
      display: 'flex',
      height: '320px',
      width: '100%',
      margin: '30px auto',
      maxWidth: '1200px',
      position: 'relative'
    },
    image: {
      width: '600px',
      objectFit: 'contain',
    },
    contentContainer: {
        width: '50%',
        height: '240px',
        maxHeight: '100%',
        backgroundColor: 'rgb(0,0,0, 0.8)',
        zIndex: 100,
        position: 'absolute',
        right: '0',
        boxShadow: '1px 6px 6px rgb(0,0,0, 0.2)',
        padding: '40px'
    },
    title: {
        color: '#fff',
        marginTop: '10px'
    },
    subtitle: {
        color: '#DF0C0C',
        fontWeight: 500,
        fontSize: '16px',
        margin: '14px 0'
    },
    description: {
        color: '#fff',
        fontSize: '16px',
        fontWeight: 300,
    },
    btn: {
        width: 'fit-content',
        height: 'fit-content',
        padding: '10px 20px',
        backgroundColor: '#DF0C0C',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '2px',
        marginTop: '40px',
    }
}));