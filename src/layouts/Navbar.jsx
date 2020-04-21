import React, { useState } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GridPage from '../components/GridPage';
import ChartPage from '../components/ChartPage'

const NavBar = () => {
  return (
    <>
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-home"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="components">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-sitemap"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Components</NavText>
                  </NavItem>
                  <NavItem eventKey="tutorials">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-info"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Tutorials</NavText>
                  </NavItem>
                  <NavItem eventKey="settings">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-cog"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Settings</NavText>
                  </NavItem>
                  <NavItem eventKey="logout">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-sign-out"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Log Out</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route
                  path="/"
                  exact
                  component={(props) => <GridPage />}
                />
                <Route path="/home" component={(props) => <GridPage />} />
                <Route path="/components" component={(props) => <ChartPage />} />
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    </>
  );
};

export default NavBar;
