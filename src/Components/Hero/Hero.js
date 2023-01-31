


import "./Hero.css"



function Hero() {



  
  return (
    <div>
         <div className="header-content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="emai-signup">
            <input type="email" placeholder='Email address' required />
            <button type='submit'>Get Started</button>
        </form>
        
      </div>
    </div>
  )
}

export default Hero
