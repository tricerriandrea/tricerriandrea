import React from "react";
import Certificate from "./Certificate";
import MyProjects from "./MyProjects";


function Homepage(props){
	return(
<div>
<div class="container-fluid">
		<div class="col-md-12 ">
			<h1 className="nameTitle">ANDREA TRICERRI</h1>
		</div>
			<div class="homepage container-fluid">
				<div className="row">
				<div class="col-md-12 ">
				<h1 className="titleIntro">THERE YOU ARE, I'VE BEEN WAITING FOR YOU</h1>
				</div>
				<div className="col-md-5">
					<img class="homepageImage img-fluid" alt="Bootstrap Image Preview" src="./images/andrea.jpg" />
					<h3 className="humanBeing">And Yes: First of all, I am a Human Being!</h3>
				</div>
				<div className="col-md-7 leftIntro">
					<h3 className="intro">I have eight years of management experience in the hospitality industry, including operational planning, delegating teams, budget & time management, and more. I am a great team-player and my jobs in the hospitality industry have taught me how to be pragmatic and to remain calm and goal oriented under pressure. Recently, I started further discovering my technical interests and skills, mainly in the field of web development. Since the start of this year, I have been dedicating most of my free time to learn front end, ReactJS, JavaScript and Project Management skills. This all has been an intense learning process, but I always like to challenge myself. I came to the decision that it is time for a career change.</h3>
					</div>
					</div>
					</div>
</div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
  </div>);
  }

  export default Homepage;