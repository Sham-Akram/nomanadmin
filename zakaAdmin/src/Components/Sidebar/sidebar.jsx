import React from 'react'
import '../../index.css'

const sidebar = () => {
  return (
    <div>
           <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="dashboard">
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-person' ></i>
              <span class="text">Employee</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-cycle' ></i>
              <span class="text">Rider</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-doughnut-chart' ></i>
              <span class="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-message-dots' ></i>
              <span class="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-group' ></i>
              <span class="text">Team</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class='bx bxs-cog' ></i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class='bx bxs-log-out-circle' ></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default sidebar