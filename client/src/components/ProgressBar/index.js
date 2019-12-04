/**
 *
 * qWiki
 * Copyright (C) 2019  Andrew Brooking, Josh Munoz, and Ryan Harris
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    return (
      <div className="box">
        <div className="skill">
          <span className="Name">Progress</span>
          <div className="percent">
            <div className="progress"></div>
          </div>
          <span className="Value">66%</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
