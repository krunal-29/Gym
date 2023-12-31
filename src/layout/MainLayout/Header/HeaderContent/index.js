// material-ui
import { Box,  useMediaQuery } from '@mui/material';
// import { GithubOutlined } from '@ant-design/icons';

// project import
// import Search from './Search';
import Profile from './Profile';
// import Notification from './Notification';
import MobileSection from './MobileSection';
// import IconButton from '@mui/material/IconButton';
// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
     
      <Box sx={{ width: '100%', ml: 1 }} style={{textAlign:"center"}}>
      <h5>

      FITNESS APP
      </h5>
      </Box>
      
     <Box sx={{  ml: 1 }} />
{/* 
      <IconButton
       
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      > */}
        {/* <GithubOutlined /> */}
      {/* </IconButton> */}

      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
