import logo from './logo.svg';
import './indBlog.css';
import img1 from './assets/image1.jfif';
import img2 from './assets/image2.jfif';
import img3 from './assets/image3.jpg';
import img4 from './assets/crypto-crash.jfif';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { typography } from '@mui/system';

function IndBlog() {
  let heading="The Crypto Crash: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  let content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Commodo viverra maecenas accumsan lacus. Felis donec et odio pellentesque diam volutpat commodo. Ac ut consequat semper viverra nam libero justo laoreet. Cursus euismod quis viverra nibh. In hac habitasse platea dictumst quisque sagittis purus sit. Et netus et malesuada fames ac turpis. Id nibh tortor id aliquet lectus proin. Pharetra convallis posuere morbi leo urna molestie at elementum. Ullamcorper velit sed ullamcorper morbi.";
  let heading2="Lorem ipsum dolor sit amet";
  return (
    <div className="blog">
      <div>
        <img className="image1" src={img1} alt="image1"/>
      </div>
      <div className="content">
        <div className="shareIcons">
          <h4>Share</h4>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
        </div>
        <div className="Firstcontent">
          <h1>{heading}</h1>
          <p className="paraNew">{content}</p>
          <p>{content}</p>
          <h1>{heading2}</h1>
          <p>{content}</p>
          <p>{content}</p>
        </div>
      </div>
      <div><img className="image2" src={img2} alt="image1"/> </div>
       <div className="content2">
          <h1>{heading2}</h1>
          <p>{content}</p>
          <p>{content}</p>
       </div>
       <div><img className="image2" src={img3} alt="image3"/> </div>
       <div className="content2">
          <p>{content}</p>
          <p>{content}</p>
       </div>

      <div className="Blogs">
   <div className="headerourses">
    <p className="myBlogs h1blogs">Similar Blogs</p>
    <div className="btnBlogs">
    <Button className="blogBtn2" variant="contained" size="small"><ArrowBackIcon/></Button>
    <Button className="blogBtn1"  variant="contained" size="small"><ArrowForwardIcon/></Button>
    </div>
    </div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={img4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    10/08/2021
                    <h3> Crypto Crash</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Commodo viverra maecenas accumsan lacus.</p>
                  </Typography>
                </CardContent>
              </Card>
        </Grid>

        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={img4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    10/08/2021
                    <h3> Crypto Crash</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Commodo viverra maecenas accumsan lacus.</p>
                  </Typography>
                </CardContent>
              </Card>
        </Grid>
       
        <Grid item xs>
          <Card className="stockMarketBasics" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={img4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    className="stockMarketBasics"
                    variant="body2"
                    
                  >
                    10/08/2021
                    <h3> Crypto Crash</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Commodo viverra maecenas accumsan lacus.</p>
                  </Typography>
                </CardContent>
              </Card>
        </Grid>
      </Grid>
      
</div>

    </div>
  );
}

export default IndBlog;
