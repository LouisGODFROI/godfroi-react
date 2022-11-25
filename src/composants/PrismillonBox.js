import {Grid, Box} from '@mui/material/';
export function PrismillonBox({name, i, tabImage}) {
    return (
        <Grid item xs={3}>
            <Box sx={{
              backgroundColor: 'warning.main',
            }}>
              <center>
              <div key={i}>{i+1} : {name}<img src={tabImage[i]} width="165"></img></div>
              </center>
              </Box>
          </Grid>
    )
    
}