import React from 'react'
import foto from "../../img/kendi.jpeg"
const About = () => {
  return (
    <div class="card2" id="about">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src={foto}
          class="img-fluid rounded-circle"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fs-1">About me</h5>
          <p class="card-text fs-3 text-dark">
            Hello, I'm Enes, an Enthusiastic Frontend Developer who loves to
            create beautiful user interfaces. I'm a dedicated individual who
            loves to accomplish my goals. Some of my most vital skills are
            communication, problem-solving, and the ability to receive
            feedback and improve upon it. I'm glad I decided to learn to
            program. It's taught me how to become resourceful and think
            outside the box. I've been able to accomplish many things I
            thought were impossible.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
          <div
            class="btn-group d-flex flex-column align-items-center justify-content-center"
          >
            <a
              href="mailto:enesskocc5@gmail.com"
              class="btn btn-primary active px-5"
              aria-current="page"
            >
              CONTACT <i class="fa-solid fa-envelope"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About