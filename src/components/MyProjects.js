import React from "react";

function MyProjects() {
    return (
      <div>
        <section className='container-fluid projectsColor row'>
        <h1 className='myProjectsTitle'>MY PROJECTS</h1>
            <div className='quizTime col-lg-6'>
            <div className='quizImg col-5'>
            </div>
            <div className="quizDesc">
            <h4 className="projectsTitle">Quiz</h4>
            <h6 className="projectDesc">Let's see how much you know about me, you can win a skiing holiday in the Maldives. I am sure you cannot do 100%.</h6>
            <a href="https://github.com/andreatricerri/quizApp" target='_blank' class="myButtonProjects" >Go to the Quiz</a>
            </div>
            </div>
            <div className='calculator col-lg-6'>
            <div className='calcImg col-5'>
            </div>
            <div className="calcDesc">
            <h4 className="projectsTitle">Calculator</h4>
            <h6 className="projectDesc">Everyone needs a calculator at hand, we both know it. I will lend you mine: here it is!</h6>
            <a href="https://github.com/andreatricerri/calculator" target='_blank' class="myButtonProjects">Your Calculator</a>
            </div>
            </div>
        </section>
        <section className='container-fluid projectsColor row'>
            <div className='pwGenerator col-lg-6'>
            <div className='pwImg col-5'>
            </div>
            <div className="pwDesc">
            <h4 className="projectsTitle">Password Generator</h4>
            <h6 className="projectDesc">Your password is no longer secure. Luckily you can now change it in just few clicks. </h6>
            <a href="https://github.com/andreatricerri/passwordGenerator" target='_blank' class="myButtonProjects">Change your PW</a>
            </div>
            </div>
            <div className='countdown col-lg-6'>
            <div className='countImg col-5'>
            </div>
            <div className="countDesc">
            <h4 className="projectsTitle">Countdown</h4>
            <h6 className="projectDesc">Do you know how many days are left until Christmas? And Easter? Ok, but i am sure you don't know this countdown.</h6>
            <a href="https://github.com/andreatricerri/countdown" target='_blank' class="myButtonProjects">Hey, check here!</a>
            </div>
            </div>
        </section>
        </div>
        )
}

export default MyProjects