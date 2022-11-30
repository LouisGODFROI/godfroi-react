import {Grid, Box} from '@mui/material/';
export function PokeBox({tabType, i, offset, name, tabImage}) {
    return (
        <Grid item xs={3}>
            <Box sx={{
              backgroundColor: tabType[i],
              '&:hover': {
                backgroundColor: 'success.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <a style={{ 
            color: '#000', 
            textDecoration: 'none', 
            verticalAlign: 'middle', 
            }}
            href={`../pokemon/${i+1+offset}`}>
                <center>
                  <div key={i}><p>{i+1+offset} : {name} </p> <img src={tabImage[i]}></img></div>
                </center>
              </a>
              </Box>
          </Grid>
    )
    
}