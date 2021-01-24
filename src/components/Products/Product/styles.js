import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: '0px',
    backgroundColor: 'transparent',
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '16px'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  productName: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#000'
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 0'
  },
  iconCircle: {
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 1px 3px rgb(0, 0, 0, 0.3)',
    borderRadius: '50px'
  },
  icon: {
    height: '23px',
    width: '23px',
  }
}));
    
