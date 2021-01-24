import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    helpBar: {
      height: '50px',
      width: 'fit-content',
      backgroundColor: '#fff',
      padding: '20px 40px',
      borderRadius: '50px 50px 0 50px',
      boxShadow: '0px 0px 20px rgb(0, 0, 0, 0.3)',
      zIndex: '1000',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      cursor: 'pointer'
    },
    title: {
        fontWeight: 600,
        fontSize: '16px',
        color: '#DC0000',
        padding: '5px 0'
    },
    subtitle: {
        fontWeight: 400,
        fontSize: '15px'
    }

  }));