import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      '& a':{
          textDecoration: 'none',
          color:'#fff'
      }
    },
    register:{
        backgroundColor:'red',
        marginLeft:10
    },
    productList: {
      maxWidth: 345,
      marginTop:20,
      '& a':{
        textDecoration:'none'
      }
    },
    media: {
      height: 140,
    },
    productDetail:{
      marginTop:20
    },
    detailImage:{
      height: 340,
    },
    loading: {
      marginTop:40,
      textAlign:'center'
    }
  }));

  export default useStyles;