import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    banner: {
      height: 'fit-content',
      width: '100%',
      boxShadow: '1px 2px 2px #00000015',
      zIndex: 1000,
      backgroundColor: '#fff'
    },
    bannerWrapper: {
        width: 'fit-content',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '18px 0',
    },
    bannerText: {
        fontSize: '15px',
        fontWeight: '300',
        color: '#5B5B5B'
    },

    bannerHighlight: {
        color: '#E23C64',
        fontWeight: '700'
    }

  }));