import classes from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={classes.card__name}>
      <h3>
        Victor Crest <span>26</span>
      </h3>
      <h4>London</h4>
      <hr></hr>
    </div>
  );
};

export default UserInfo;
