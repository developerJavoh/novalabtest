import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/Loader.css'
const Loader = () => {
    return (<>
        <div className="modals">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                
            </Box>
         
        </div>
    </>
    );
}
export default Loader;