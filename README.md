# BestBuy Searchbar Clone
<h1>Access the Demo</h1>

<!-- Click here to acess the demo ==> https://richigro.github.io/Fake-User-Generator/ -->

<h2>What the app does</h2>

The app was created with the intention of reacreating the functionality of the searchbar inside the <a href="https://www.bestbuy.com/">Real BestBuy app</a>. It contains most of the functionality of the real app, it includes predictive text, that swifts trough all possible items in the store to find an item that matches the user's search.

<h3>Why I created this app</h3>
<!-- This app was created because I wanted an easy way to create dummy data for my applications, to see how my applications would handle mutiple
users at the same time; while at the same time not having real users. This application also serves as a great way to test new new changes that you may want to apply to a real user database but cannot afford to change or lose data while testing. -->

This particular app was created in an team effort to recreate a popular site's frontend while using a microservices type architecture.My team consisted of 4 team member, we separated the responsibilities into 4 main basic components. The search-bar(this app), the product image, the carousel and reviews.Each componet was created separetly from each other's.Each of our components can run individually, but also have the ability to talk to each other trough a proxy server that each of us also deployed on Aws(elastic beanstalk).

<h2>Important Notice</h2>
<!-- All of the randomly generated data is fake and therefore do not belong to a real person; the source api uses a long list a name given for a nationality and and adress, everything is made up and made realistic by careful selection of each fake users data. All of the images you see in this app are Free Source images and are generated randomly each time the api is called, which can cause duplication of images for a diferrent user in some cases.  -->

All of the data that this application uses was obtained using a BestBuy developer's Api Key (Not included), which is no longer active meaning the data is hard-coded.

<h2> How to Use </h2>
<!-- Using the Fake-User_Generator app is simple, in fact it only takes 4 steps. -->
Using this searchbar is the easiest thing you'll ever do. Which is why you can see all of its functionality in 5 easy steps.

Step 1.)
  <srong>To get started using the app simply click on the demo link in the <i>Access the demo </i> section inside this README.</strong>
  
 Step 2.)
  <srong>Click on the search bar</strong>
  The number of users is required while gender and nationality is optional
  
  
  <img src="assets/fk1.png" width="500" height="auto" style="display: block; margin: 0 auto;"> 
  
  
  Step 3.)
  <srong>Click on generate at the bottom of the form to generate the desired fake users</strong>
  
  
  <img src="assets/fk3.png" width="500" height="auto" style="display: block; margin: 0 auto;">
  
  
  Step 4.)
  <srong>And You are Done</strong>
  Now you are able to see your generated users given your specific criteria.
  
  
  <img src="assets/fk8.png" width="500" height="auto" style="display: block; margin: 0 auto;">
  
  
  <h3>To view More info about your user</h3>
    Simply click on the view more info tab inside each user.
    
    
   
   
   <img src="assets/fk6.png" width="500" height="auto" style="display: block; margin: 0 auto;">
   
  <h3>Copy the Users Information easily</h3>
   While the more info tab is open click on the copy to cliboard button below, 
   to have a copy of the text ready to be pasted.
   
   
   <img src="assets/fk7.png" width="500" height="auto" style="display: block; margin: 0 auto;">

<h2>Technologies</h2>
  <img src="assets/fk7.png" width="500" height="auto" style="display: block; margin: 0 auto;">
  <h3>Frontend</h3>
    React with hooks
    Html
    Css
    Webpack & babel-loader (no create-react-app boiler)
  <h3>Backend</h3>
  Nodejs
  Express
  AWS Elastic Beanstalk
  AWS S3
  AWS RDS
