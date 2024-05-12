import React from "react";
import styles from "./Home.module.css";
import ProfilePic from "../../assets/profilePic.png";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import MessageBox from "../MessageBox/MessageBox";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleAsk = (text) => {
    navigate("/chat", { state: { inputText: text } });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}><Typography variant="h4" sx={{ fontWeight: 700 }}>Bot AI</Typography></div>
      <div className={styles.content}>
        <div className={styles.heroBox}>
          <Typography sx={{ fontWeight: 500, fontSize: "28px" }}>How Can I Help You Today?</Typography>
          <div className={styles.heroPic}>
            <img src={ProfilePic} alt="HeroPic" />
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight: 700, lineHeight: 2}}>
                  Hi, what is the weather        
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Get immediate AI generated response
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight: 700, lineHeight: 2}}>
                  Hi, what is my location        
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Get immediate AI generated response
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight: 700, lineHeight: 2}}>
                  Hi, what is the temperature        
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Get immediate AI generated response
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight: 700, lineHeight: 2}}>
                  Hi, how are you        
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Get immediate AI generated response
                </Typography>
              </CardContent>
            </Card>
          </Grid>         
        </Grid>
        <MessageBox handleAsk={handleAsk} />
      </div>
    </div>
  );
}
