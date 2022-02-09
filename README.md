# Solution

- <b>Live on</b> https://focused-sammet-df51ae.netlify.app/
- <b>What design/implementation decisions did you make and why? </b> <br/>
  We decide design/implementation decisions depends upon complaxity of project, this is a simple problem so I will implement through following strategy: <br/>
  <b> React Function Components </b>: To define the displayed view and bind it to the code that drives its behavior <br/>
  <b> Styled Components </b>: Eliminates class name bugs: styled-components provide unique class names for your styles, thus eliminating the problems with class names duplications, misspellings, and overlaps <br/>
  <b> React Lazy Load Image Component </b>: React Component to lazy load images and other components/elements. Supports IntersectionObserver and includes a HOC to track window scroll position to improve performance. <br/>
  <b> Axios </b>: used to make HTTP requests from XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests <br/>
  <b> Querystring </b>: Parse and stringify URL query strings
  <br/>

- <b>What would you have done if you had more time? </b> <br/>
  <b> Infinite Scroll Loading </b>: I will implement infinite scoll loading, here i used opensea api keys - it need some time for approval through opensea<br/>
  <b> Wallet Connection </b>: Thorugh web3-react, we will provide add wallet connect functionality so that user can se their balance and nft balance also.<br/>
  <b> Create NFT </b>: User can create nft on our platform, and user can see that in opensea also.<br/>
  <b> NFT Detail page </b>: User can see NFT detail on our platform.<br/>
  <b> Implement SSR </b>: For Optimization, SEO. <br/>
  <b> Test cases </b>: Implement test cases, to unsure that our platform is bug free and helps us in future development also.
  <br/>

- <b>What would you need to do to make this project production ready? </b> <br/>
  <b> Infura project key </b>: need to update infura project key<br/>
  <b> Test cases / Testing </b>: To ensure that our platform is bug free.<br/>
  <b> Some Deployment config </b>: as per our host service we need to config some deployment file.<br/>
  <br/>

# NFT Gallery Coding Challenge

This coding challenge is designed to test your ability to work with React, typescript, and basic web3 libraries. It is designed to be a short project that covers a few different kinds of tasks. Please do not spend more than 4 hours on the project. We want to see how you work so make commits as you normally would.

## Starter Project

The current repo contains a starter project designed to get you up and running quickly. It was created with [create react app](https://create-react-app.dev/) and already has web3.js installed along with necessary webpack configuration. We've also installed a redux store along with some basic styling. Please use these packages in your solution.

Feel free to install any additional packages you would like.

## Starting the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requirements

## Build an NFT collection gallery

- Use the OpenSea API to display Mark Cuban's API collection styled as close as possible to the image below
- His ETH address is 0x293ed38530005620e4b28600f196a97e1125daac
- [Use the /assets endpoint](https://docs.opensea.io/reference/getting-assets)
- Display the first 20 NFTs on page load

![NFT Collection](https://i.postimg.cc/qRCB8sbq/Screen-Shot-2022-02-03-at-4-53-27-PM.png)

## Display the ETH address balance in the header

- Use [web3.js](https://web3js.readthedocs.io/en/v1.7.0/web3-eth.html) to get the ETH balance at the same address that owns the NFTs from the previous step
- Display the balance in ETH with 4 numbers after the decimal
- Style as close as possible to the image below
- You can use the following Infura account link for your web3 provider: wss://mainnet.infura.io/ws/v3/2c7191550131482ea9abe1769197c33c

![Header Example](https://i.postimg.cc/BQBFsdCs/Screen-Shot-2022-02-04-at-3-48-05-PM.png)

# Submitting your solution

Before you submit your project please take a few minutes to write about your solution at the top of this README.md file. Covering at least these topics would be a good idea:

- What design/implementation decisions did you make and why?
- What would you have done if you had more time?
- What would you need to do to make this project production ready?

Once you are satisfied with your solution please push the repo to your personal github account - either as a public project or a private project that you give us access to and then send us a link.
