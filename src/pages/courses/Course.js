import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./courses.css";
import { Grid } from '@material-ui/core';
import { TextField } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircularProgress from '@mui/material/CircularProgress';
import img1 from './assets/image1.jfif';
import img2 from './assets/image2.jfif';

export default function MediaCard() {
  let heading="Learn Trading from the ";
  let heading2="Best Traders";
  let para="Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  let para2="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  return (
<div className="mainbody">
  
    <section className="containerPart">
      <div className="leftPart">
      <h1 className="heading">{heading}</h1>
      <h1 className="heading2">{heading2}</h1>
     <p className="para">{para}</p>
     <p className="para2">{para2}</p>
     <form className="search">
       <TextField className="searchInput" id="outlined-basic" label="Search" variant="outlined" />
       <Button className="searchButton" variant="contained" size="large">Search</Button>
     </form>
      </div>
      <div className="rightPart">
      <div className="rightPartWhite"><p className="textRight">400+</p><p className="textRight2">Hours of courses</p></div>
      <div className="rightPartWhite"><p className="textRight">1000+</p><p className="textRight2">Students Enrolled</p></div>
      <div className="rightPartWhite"><p className="textRight">₹50L+</p><p className="textRight2">Capital managed in last 6 months</p></div>
      <div className="rightPartWhite"><p className="textRight">₹10K+</p><p className="textRight2">Schlorships given for excellence</p></div>
      </div> 
    </section>
     
  

  {/* courses */}

  <div className="Courses">
  <div className="headerourses">
    <p className="myCourses h1courses">My Courses</p>
    <div className="btnCourses">
    <Button className="coursesBtn1" variant="contained" size="small"><ArrowForwardIcon/></Button>
    <Button className="coursesBtn2" variant="contained" size="small"><ArrowBackIcon/></Button>
   
    </div>
    </div>
      <Grid container spacing={7}>
        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="140"
                  image={img1}
                  alt="green iguana"
                />
                <img src={img2} alt="image 2" className="top-image"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stock Market Basics
                  </Typography>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    XYZ Institute
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="viewCourse" size="large">
                   View Course
                  <CircularProgress className="Progress-value" variant="determinate" value={75} style={{ transform: [{ scaleX: -1 }] }}/>
                  </Button>
                </CardActions>
              </Card>
        </Grid>
        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                className="cardImage"
                  component="img"
                  height="140"
                  image={img1}
                  alt="green iguana"
                />
                <img src={img2} alt="image 2" className="top-image"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stock Market Basics
                  </Typography>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    XYZ Institute
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="viewCourse" size="large">
                   View Course
                  <CircularProgress className="Progress-value" variant="determinate" value={75} style={{ transform: [{ scaleX: -1 }] }}/>
                  </Button>
                </CardActions>
              </Card>
        </Grid>

        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                className="cardImage"
                  component="img"
                  height="140"
                  image={img1}
                  alt="green iguana"
                />
                <img src={img2} alt="image 2" className="top-image"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stock Market Basics
                  </Typography>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    XYZ Institute
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="viewCourse" size="large">
                  View Course
                  <CircularProgress className="Progress-value" variant="determinate" value={75} text={75} style={{ transform: [{ scaleX: -1 }] }}/>
                  </Button>
                </CardActions>
              </Card>
        </Grid>
      </Grid>
</div>

{/* explore */}

  <div className="explore">
          <p className="myCourses">Explore</p>
          <div className="exploreButtons">
          <Button className="btn btn1" variant="contained" size="small"><TrendingUpIcon/>Trading</Button>
          <Button className="btn" variant="outlined" size="small"  style={{ borderColor: '#121335'}}><ListAltIcon/>Investments</Button>
          <Button className="btn" variant="outlined" size="small" style={{ borderColor: '#121335'}}><TrendingUpIcon/>Entrepreneurship</Button>
          <Button className="filterBtn" variant="outlined" size="small"  style={{ borderColor: '#121335'}}><FilterListIcon/>Filter</Button>
          </div>
          
      <Grid container spacing={7}>
      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>
      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>

      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course 
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>

      
    </Grid>
    <Grid className="lastContainer" container spacing={7}>
      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course 
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>
      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>

      <Grid item xs>
        <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
              <CardMedia
              className="cardImage"
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
              />
              <img src={img2} alt="image 2" className="top-image"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock Market Basics
                  <BookmarkBorderIcon className="bookmarkIcon"/>
                </Typography>
                <Typography
                  className="stockMarketBasics"
                  variant="body2"
                  
                >
                  XYZ Institute
                </Typography>
                <Typography>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarIcon style={{ fontSize: 17 }}/>
                  <StarBorderIcon style={{ fontSize: 17 }}/>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button className="viewCourse" size="large">
                  View Course
                </Button>
                <h3 className="pricePart">$15</h3>
              </CardActions>
            </Card>
      </Grid>

      
    </Grid>


  </div>
</div>
  );
};
