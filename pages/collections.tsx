import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {Layout} from "components/Layout";
import * as React from "react";

const COLLECTIONS = [
  ["costumecoretemplate", "Costume Core Template"],
  // ["iastate-amd354", "Iowa State University AMD 354 teaching resource"],
];

const CollectionsPage: React.FunctionComponent = () => (
  <Layout>
    <Grid container>
      <Grid item>
        <Typography variant="h6">Collections</Typography>
        <List>
          {COLLECTIONS.map(([subdomain, label]) => (
            <ListItem key={subdomain}>
              <ListItemText>
                <Link href={`https://dressdiscover.github.io/${subdomain}/`}>
                  {label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </Layout>
);

export default CollectionsPage;
