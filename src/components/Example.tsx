import React from "react";
import { Container, createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { State } from "../redux/types";


type ExternalProps = {};
type StateProps = {
  title: string,
};
type DispatchProps = {};

interface InternalProps extends WithStyles<typeof styles>,
    ExternalProps,
    StateProps,
    DispatchProps {
}

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.grey[100],
    textAlign: "center",
  }
});

const mapStateToProps: MapStateToProps<StateProps,
    ExternalProps,
    State> = (state, ownProps) => ({
  title: state.title
});
const mapDispatchToProps: MapDispatchToProps<DispatchProps,
    ExternalProps> = (dispatch, ownProps) => ({});

const Example: React.FC<InternalProps> = (
    {
      classes,
      title,
    }) => {
  return (
      <Container className={classes.root}>
        <Typography variant="h3">
          {title}
        </Typography>
      </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Example));
