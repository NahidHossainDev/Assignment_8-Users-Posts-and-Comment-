import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id, title, body, userId } = props.post;

  let bodyElement;
  if (props.showMore === true) {
    bodyElement = body.slice(0, 40);
  }

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const commentBtn = (
    <div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        ({comment.length})Comments
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comment.map((cmn) => (
            <Comments data={cmn}></Comments>
          ))}
        </CardContent>
      </Collapse>
    </div>
  );

  const num = Math.round((Math.random() * 1000));
  console.log("number", num)
  return (
    <Grid item xs={props.showMore === true ? 6 : 8} className={classes.card}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt={title} src="/static/images/avatar/1.jpg" className={classes.avatar} />}
          // avatar={<Avatar src={`https://randomuser.me/api/portraits/med/men/${num}.jpg`} alt="User" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
        />
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/id/${num}/200/300`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.showMore === true ? bodyElement : body}{" "}
            {props.showMore && <Link to={`/postDetail/${id}`}>See more</Link>}
          </Typography>
        </CardContent>
        {props.showMore && commentBtn}
      </Card>
    </Grid>
  );
}
