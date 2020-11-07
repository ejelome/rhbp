import { grey } from "@material-ui/core/colors";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => {
  const {
    info: { light },
  } = palette;

  return createStyles({
    root: {
      backgroundColor: light,
      "& h1": { color: grey[50] },
    },
  });
});

export default styles;
