import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
// import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';


import InventoryIcon from '@mui/icons-material/Inventory';
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What we have?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Stock Information
                </Typography>

                <Paragraph 
                text={
                    ' We have more 5000 reviews\
                    and trust of our users.' 
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <ShowChartIcon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Charts Analysis
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <PriceCheckIcon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Stock Value
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                        fontSize="large"
                        color="secondary" />
                    </CardContent>
                </Card>
            </Grid>

          

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}
                >
                    <CardContent>
                        <IconButton>
                            <InventoryIcon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Inventory
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            
        </Grid>
    );
}

export default Content