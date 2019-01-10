import React from 'react';
import {Link} from 'react-router';
import {Navbar,NavItem,NavDropdown,MenuItem,Nav,Glyphicon} from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class Header extends React.Component{
  render() {
     const { classes } = this.props;
    return (
      <div>
          <Navbar inverse collapseOnSelect light>
              <Navbar.Header>
                <Navbar.Brand>
                  <a  href={'/home'}>Eshop</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown eventKey={1} title="Product" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>
                          <Link  to="/product">View Product</Link>
                   </MenuItem>
                    <MenuItem eventKey={1.2}><Link to="/addProduct">Add Product</Link></MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <NavDropdown eventKey={2} title="Category" id="basic-nav-dropdown">
                    <MenuItem eventKey={2.1}><Link to="/category">View Category</Link ></MenuItem>
                    <MenuItem eventKey={2.2}><Link to="/addCategory">Add Category</Link></MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <Badge color="primary" badgeContent={4} className={classes.margin}>
                  <NavItem eventKey={3}><Link to="/carts">
                    <Glyphicon glyph="glyphicon glyphicon-shopping-cart" style={{ color: 'white' }} />
                    </Link>

                  </NavItem>
                   </Badge> 
                </Nav>

              </Navbar.Collapse>
            </Navbar> 
      </div>
    
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);

